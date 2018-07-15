import {Component, OnInit} from '@angular/core';
import {ChamadoService} from '../chamado.service';

declare var $: any;

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    listChamados: any = [];

    nomeCliente: any = '';

    constructor(private chamdoService: ChamadoService) {

    }

    ngOnInit() {
        setTimeout(function () {
            $('#chamado_table').DataTable({

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

            // $('#tbS').removeAttr('hidden', false);
        },1000);
        this.getChamadoList();

    }

    getChamadoList() {
        this.chamdoService.getChamadoList().subscribe(data => {
            this.listChamados = data;
        })
    }


}
