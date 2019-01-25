import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.scss']
})
export class ClienteViewComponent implements OnInit {

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

  constructor(private clienteService: ClienteService, private routeActive: ActivatedRoute) { }

  ngOnInit() {
    this.view();

  }

    view() {
        this.routeActive.params.subscribe(params => {
            if (params.hasOwnProperty('id')) {
                this.clienteService.view(params['id'])
                    .subscribe(data => {
                        this.cliente = data
                    });
            }
        });
    }



}
