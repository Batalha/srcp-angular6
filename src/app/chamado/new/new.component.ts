import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ClienteService} from '../../cliente/cliente.service';
import {ChamadoService} from '../chamado.service';
import {MessageService} from '../../bootstrap/message.service';
import {Router} from "@angular/router";


declare var $: any;

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

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
        laudo: ''
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


    constructor(private dadosChamados: ChamadoService,
                private router: Router,
                private listCliente: ClienteService,
                private messageService: MessageService) {
    }


    ngOnInit() {
        this.getListaCliente();

    }

    getListaCliente() {
        this.listCliente.getClienteList().subscribe(data => {
            this.nomeCliente = data
        });
    }

    save() {
        this.chamado.cliente_id = this.json(this.dadosCliente['id']);
        this.dadosChamados.save(this.chamado)
            .subscribe(() => {
                this.messageService.message = 'OS Salvo com sucesso.';
                this.router.navigate(['/srcp/chamado']);

        })
    }

    json(obj){
        return JSON.stringify(obj, null, '  ');
    }


}
