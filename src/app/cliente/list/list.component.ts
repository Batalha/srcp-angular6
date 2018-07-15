import {Component, OnInit} from '@angular/core';
import {ClienteService} from '../cliente.service';
import {MessageService} from '../../bootstrap/message.service';
import {Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    listCliente: any = [];

    mytable = '';
    message = null;

    constructor(
        private clienteService: ClienteService,
        private messegeServece: MessageService,
        private router: Router
    )
    {
        this.message = this.messegeServece.message;
    }

    ngOnInit() {
        setTimeout(function () {
            this.mytable = $('#mytable').DataTable({

                scrollY: 400,

                'oLanguage': {
                    'sLengthMenu': 'Mostrar _MENU_ itens por Pag',
                    'sZeroRecords': 'Nenhum registro encontrado',
                    'sInfo': 'Mostrando _START_ ao _END_ de _TOTAL_ itens',
                    'sInfoEmpty': 'Mostrando 0 ao 0 de 0 itens',
                    'sInfoFiltered': '(filtrado de _MAX_ itens)',
                    'sSearch': 'Procurar: ',
                    'oPaginate': {
                        'sFirst': '<<',
                        'sPrevious': '<',
                        'sNext': '>',
                        'sLast': '>>'
                    }
                }
            });
            $('.ui-widget-header').css('border', '1px solid #e3e3e3')
            $('#mytable_filter input').attr('size', 30);
            $('#mytable_filter').css('padding-top', '4px');
            $(' label').css({'margin-bottom': '4px', 'font-size': '14px'});
            $('.dataTables_info').css({'font-size': '14px'});
            $('.dataTables_paginate').css({'float': 'none', 'font-size': '14px'});
            $('table.dataTable.no-footer').css({'border-bottom': 'none'});
            $('.dataTables_wrapper .ui-toolbar').css('padding', '2px 8px');
            $('#mytable_length').css('padding', '8px 8px 2px');


            $('#tbC').removeAttr('hidden', false);
        }, 600);
            this.getClienteList();
    }

    getClienteList() {

        this.clienteService.getClienteList().subscribe(data => {
            this.listCliente = data;
        });

    }

    destroy(id, index){
        if(confirm('Deseja Excluir esse Cliente?')){

            this.clienteService.destroy(id).subscribe(()=>{
                this.listCliente.splice(index,1)
            })
        }
    }
}
