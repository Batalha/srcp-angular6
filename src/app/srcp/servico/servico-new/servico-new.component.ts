import {Component, OnInit} from '@angular/core';
import {ServicoService} from '../servico.service';
import {MessageService} from '../../bootstrap/message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-servico-new',
    templateUrl: './servico-new.component.html',
    styleUrls: ['./servico-new.component.scss']
})
export class ServicoNewComponent implements OnInit {

    servico = {
        id: null,
        nome: '',
        preco: '',
        descricao: ''
    };

    constructor(private servicoService: ServicoService,
                private messageServico: MessageService,
                private router: Router,
                private routeActive: ActivatedRoute) {
    }

    ngOnInit() {
        this.edit();
    }

    edit() {
        this.routeActive.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.servicoService.edite(params['id'])
                    .subscribe(data => {
                        this.servico = data;
                    });
            }
        });
    }

    updateServico() {
        this.servicoService.update(this.servico)
            .subscribe((data) => {
                this.messageServico.messageServico = 'Serviço Alterado com Sucesso!';
                this.router.navigate(['/srcp/servico']);
            });
    }

    saveServico() {
        this.servicoService.save(this.servico)
            .subscribe((data) => {
                this.messageServico.messageServico = 'Serviço Salvo Com Sucesso';
                this.router.navigate(['/srcp/servico']);

            })
    }

}
