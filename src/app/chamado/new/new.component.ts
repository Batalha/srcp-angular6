import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../../cliente/cliente.service';
import {ChamadoService} from '../chamado.service';
import {MessageService} from '../../bootstrap/message.service';


declare var $: any;

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {

    nomeCliente: any = [];
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

    // arrayOfKeyValues: any[] = [
    //     {'id': 1, 'value': 'Celio', 'telefone': '9827-4631'},
    //     {'id': 2, 'value': 'Lucas', 'telefone': '1166-8833'},
    //     {'id': 3, 'value': 'Fabiula', 'telefone': '9672-4433'},
    //     {'id': 4, 'value': 'Dora', 'telefone': '3388-4433'}
    // ]

    arrayOfCliente: any[] = [
        {'nome': 'Celio', 'telefone': '9827-4631'},
        {'nome': 'Lucas', 'telefone': '1166-8833'},
        {'nome': 'Fabiula', 'telefone': '9672-4433'},
        {'nome': 'Dora', 'telefone': '3388-4433'}
    ]


    constructor(private dadosChamados: ChamadoService,
                private listCliente: ClienteService,
                private messageService: MessageService) {
    }


    ngOnInit() {
        this.getListaCliente();

    }

    getListaCliente() {
        this.listCliente.getClienteList().subscribe(data => {
            this.nomeCliente = data
            for (var n = 0; n < data.length; n++) {


            }
        });
    }
    // renderCliente() {
    //     const html = `
    //             <div class='data-row'>
    //                 <div class='col-1'></div>
    //                 <div class='col-2'></div>
    //             </div>
    //     `
    // }


    save() {

        console.log(this.chamado);

        // this.dadosChamados.save(this.chamado)
        //     .subscribe(() => {
        // this.messageService.message = ''
        // })
    }


}
