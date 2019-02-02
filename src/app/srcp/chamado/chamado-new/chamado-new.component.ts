import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ClienteService} from '../../cliente/cliente.service';
import {ChamadoService} from '../chamado.service';
import {MessageService} from '../../bootstrap/message.service';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicoService} from "../../servico/servico.service";


declare var $: any;

@Component({
    selector: 'app-chamado-new',
    templateUrl: './chamado-new.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./chamado-new.component.scss']
})

export class ChamadoNewComponent implements OnInit {

    listServico: any = [];
    soma: any;

    escondeBtn;
    boolean = true;

    nomeServico: any[] = [];
    dadosServico = '';

    servico = {
        servico_id: ''
    }


    nomeCliente: any[] = [];
    dadosCliente = '';

    //
    chamado = {
        id: null,
        cliente_id: '',
        status: '',
        data_inicial: '',
        data_final: '',
        descricao: '',
        defeito: '',
        observacao: '',
        laudo: '',
        servico_id: '',
        acoes: false
    }

    clienteHeaderTemplate = `
        <div class="form-row format">
                <div class="col-md-6">Nome</div>
                <div class="col-md-6">Telefone</div>
        </div>
    `;

    renderCliente(data: any) {
        const html = `
        <div class="form-row">
                <div class="col-md-6">${data.nome}</div>
                <div class="col-md-6">${data.telefone}</div>
        </div>
        `
        return html;
    }

    servicoHeaderTemplate = `
        <div class="form-row format">
                <div class="col-md-6">Nome</div>
                <div class="col-md-6">Preco</div>
        </div>
    `;

    renderServico(data: any) {
        const html = `
        <div class="form-row">
                <div class="col-md-6">${data.nome}</div>
                <div class="col-md-6">${data.preco}</div>
        </div>
        `
        return html;
    }


    constructor(private dadosChamados: ChamadoService,
                private router: Router,
                private routeActive: ActivatedRoute,
                private listCliente: ClienteService,
                private listaServico: ServicoService,
                private messageService: MessageService) {

        this.edit();
    }


    ngOnInit() {
        this.getListaCliente();
        this.getListaServico()
        this.edit();

    }

    edit() {
        this.routeActive.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.dadosChamados.edite(params['id'])
                    .subscribe(data => {
                        this.chamado = data
                        this.dadosCliente = data['cliente'].nome
                        this.dadosServico = data['servicos'].nome

                        this.listServico = data['servicos'];
                        var i, st = 0;
                        for (i = 0; i < this.listServico.length; i++) {
                            st += this.listServico[i].preco;
                        }
                        this.soma = st.toFixed(2);
                    });
            }
        });
    }

    getListaCliente() {
        this.listCliente.getClienteList().subscribe(data => {
            this.nomeCliente = data
        });
    }


    updateChamado() {
        // delete this.chamado['cliente'];
        this.chamado.cliente_id = this.json(this.dadosCliente['id']);
        this.dadosChamados.update(this.chamado)
            .subscribe((data) => {
                this.messageService.messageChamado = 'OS Alterado com Sucesso!';
                this.router.navigate(['/srcp/chamado']);
            });
    }

    saveChamado() {
        this.chamado.cliente_id = this.json(this.dadosCliente['id']);
        this.dadosChamados.save(this.chamado)
            .subscribe((data) => {
                this.messageService.messageChamado = 'OS Salvo com sucesso.';
                this.router.navigate([`/srcp/chamado/${data.id}/edit`]);

            })
    }

    getListaServico() {

        this.listaServico.getListServico().subscribe(data => {
            this.nomeServico = data
        });
    }

    addServicoOs() {
        this.chamado.servico_id = this.json(this.dadosServico['id']);
        this.chamado.acoes = true;
        this.dadosChamados.update(this.chamado).subscribe((data) => {

            this.listServico = data['servicos'];
            var i, st = 0;
            for (i = 0; i < this.listServico.length; i++) {
                st += this.listServico[i].preco;
            }
            this.soma = st.toFixed(2);
            this.router.navigate([`/srcp/chamado/${data.id}/edit`]);
        })
    }

    destroyServicoOs(id){
        this.chamado.servico_id = this.json(id);
        this.chamado.acoes = false;
        this.dadosChamados.destroyServico(this.chamado).subscribe( (data) => {
            this.listServico = data['servicos'];
            var i, st = 0;
            for (i = 0; i < this.listServico.length; i++) {
                st += this.listServico[i].preco;
            }
            this.soma = st.toFixed(2);
            this.router.navigate([`/srcp/chamado/${data.id}/edit`]);
        })

    }


    json(obj) {
        return JSON.stringify(obj, null, '  ');
    }

    onClick() {
        this.escondeBtn = !this.escondeBtn;
    }


}
