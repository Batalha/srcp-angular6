import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChamadoService} from "../chamado.service";
import {ActivatedRoute} from "@angular/router";
import * as jsPDF from 'jspdf';

@Component({
    selector: 'app-chamado-view',
    templateUrl: './chamado-view.component.html',
    styleUrls: ['./chamado-view.component.scss']
})
export class ChamadoViewComponent implements OnInit {

    @ViewChild('content') content: ElementRef;

    listServico: any = [];
    soma: any;

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

    constructor(
        private chamadoService: ChamadoService,
        private routeActive: ActivatedRoute

        ) {

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
                        this.listServico = data['servicos'];
                        var i, st=0;
                        for (i=0; i < this.listServico.length; i++){
                             st += this.listServico[i].preco;
                        }
                        this.soma = st.toFixed(2);

                    });
            }
        });
    }

    public downloadChamado(){

        let doc = new jsPDF('p', 'pt', 'a4');

        let specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        let content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        doc.save('teste.pdf');
    }

}
