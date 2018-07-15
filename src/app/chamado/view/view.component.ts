import {Component, OnInit} from '@angular/core';
import {ChamadoService} from "../chamado.service";
import {ActivatedRoute} from "@angular/router";
import {Os} from "./os";

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

    os = {
        id: null,
        cliente_id: '',
        data_inicial: '',
        data_final: '',
        status: '',
        descricao: '',
        defeito: '',
        observacao: '',
        laudo: '',
        created_at: '',
        updated_at: '',
        cliente: {
            id: '',
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
            estado: '',
            created_at: '',
            updated_at: ''
        }
    };

    constructor(private chamadoService: ChamadoService, private routeActive: ActivatedRoute) {

    }

    ngOnInit() {

        this.view();
    }


    view() {
        this.routeActive.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.chamadoService.view(params['id'])
                    .subscribe(data => {
                        this.os = data;
                    });
            }
        });
    }


}
