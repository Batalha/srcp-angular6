import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from "../../bootstrap/message.service";


@Component({
    selector: 'app-cliente-new',
    templateUrl: './cliente-new.component.html',
    styleUrls: ['./cliente-new.component.scss']
})
export class ClienteNewComponent implements OnInit {


    cliente = {
        id: null,
        nome: '',
        cpf_cnpj: '',
        telefone: '',
        celular: '',
        email: '',
        cep: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: ''
    };

    constructor(private clienteService: ClienteService,
                private router: Router,
                private routeActive: ActivatedRoute,
                private messageService: MessageService
                ) {
    }

    ngOnInit() {
        this.edit();
    }

    edit() {
        this.routeActive.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.clienteService.edite(params['id'])
                    .subscribe(data => {
                        this.cliente = data
                    });
            }
        });
    }

    update() {
        this.clienteService.update(this.cliente)
            .subscribe((data) => {
                this.messageService.message = 'Cliente Alterado com Sucesso!';
                this.router.navigate(['/srcp/cliente']);
            });
    }


    save() {
        this.clienteService.save(this.cliente)
            .subscribe((data) => {
                this.messageService.message = 'Cliente salvo com Sucesso!';
                this.router.navigate(['/srcp/cliente']);
            });
    }


}
