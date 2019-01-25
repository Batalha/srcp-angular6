import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChamadoService} from "../chamado/chamado.service";
import {Router} from "@angular/router";
import * as jsPDF from 'jspdf';


declare var $: any;
// declare var xepOnline: any;

@Component({
    selector: 'app-lista',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

    @ViewChild('content') content: ElementRef;

    listarDados: any[] = [];
    data: any = [];
    doc: any;

    listar = {
        data_inicial: '',
        data_final: ''
    };

    constructor(private listaDados: ChamadoService, private router: Router) {
    }

    ngOnInit() {

    }



    getListaPage() {
        this.doc = new jsPDF();
        this.listaDados.getChamadoListDados(this.listar).subscribe(data => {

            console.log(data[0]['servicos']);
            this.listarDados = data;


            var paginas = Math.floor(data.length/5)
            var resultado = (data.length - Math.trunc(data.length/5) * 5)
            var dadosTotal = data.length


            // console.log('resto :'+ paginas + ' resultado : ' + resultado + 'total :'+ data.length)

                this.doc.setFontSize(14)
                this.doc.setFont('verdana')
                this.doc.setFontType('bold')
                this.doc.text(10,15, 'Listagem de Clientes/Fornecedores')

                var y: any = 25;
                var x: any = 10;
                var pag = 0
                for (var i =0; i < dadosTotal; i++){
                    pag = pag + 1;
                    this.constroiPdf(data, i, x, y)
                    y = y + 50
                    if (pag >= 5) {
                        this.doc.addPage()
                        y = 25;
                        x = 10;
                        pag = 0;
                    }
                }
                this.doc.save('teste.pdf');
        })
    }

    public constroiPdf(data, i, x, y){

        var codigo = data[i]['cliente'].celular.replace(/[^\d]+/g, '')
        var dataInc = data[i].data_inicial.split('-')
        var dataFim = data[i].data_final.split('-')
        var dataInc: any = dataInc[2] + '/' + dataInc[1] + '/' + dataInc[0]
        var dataFim: any = dataFim[2] + '/' + dataFim[1] + '/' + dataFim[0]


        this.doc.setDrawColor(0)
        this.doc.setFillColor(200, 200, 200)
        this.doc.rect(x, y + 1, 190, 5, 'FD')

        this.doc.setFontSize(9)
        this.doc.setFont('verdana')
        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 5, 'Codigo :')
        this.doc.setFontType('')
        this.doc.text(x + 15, y + 5, codigo)

        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 12, 'Nome :')
        this.doc.setFontType('')
        this.doc.text(x + 13, y + 12, data[i]['cliente'].nome)

        this.doc.setFontType('bold')
        this.doc.text(x + 110, y + 12, 'Dt.Inicial :')
        this.doc.setFontType('')
        this.doc.text(x + 130, y + 12, dataInc)

        this.doc.setFontType('bold')
        this.doc.text(x + 153, y + 12, 'Dt.Final :')
        this.doc.setFontType('')
        this.doc.text(x + 171, y + 12, dataFim)

        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 18, 'Endereco :')
        this.doc.setFontType('')
        this.doc.text(x + 18, y + 18, data[i]['cliente'].endereco)

        this.doc.setFontType('bold')
        this.doc.text(x + 110, y + 18, 'CEP :')
        this.doc.setFontType('')
        this.doc.text(x + 119, y + 18, data[i]['cliente'].cep)

        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 24, 'Estado :')
        this.doc.setFontType('')
        this.doc.text(x + 14, y + 24, data[i]['cliente'].estado)

        this.doc.setFontType('bold')
        this.doc.text(x + 34, y + 24, 'Cidade :')
        this.doc.setFontType('')
        this.doc.text(x + 48, y + 24, data[i]['cliente'].cidade)

        this.doc.setFontType('bold')
        this.doc.text(x + 80, y + 24, 'Bairro :')
        this.doc.setFontType('')
        this.doc.text(x + 93, y + 24, data[i]['cliente'].bairro)

        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 30, 'Telefone :')
        this.doc.setFontType('')
        this.doc.text(x + 16, y + 30, data[i]['cliente'].telefone)

        this.doc.setFontType('bold')
        this.doc.text(x + 80, y + 30, 'Celular :')
        this.doc.setFontType('')
        this.doc.text(x + 95, y + 30, data[i]['cliente'].celular)

        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 36, 'CPF :')
        this.doc.setFontType('')
        this.doc.text(x + 12, y + 36, data[i]['cliente'].cpf_cnpj)

        this.doc.setFontType('bold')
        this.doc.text(x + 1, y + 42, 'Email :')
        this.doc.setFontType('')
        this.doc.text(x + 13, y + 42, data[i]['cliente'].email)

        if (data[i]['servicos'].length > 0) {
            var b = 25;

            var total: any = 0;
            this.doc.setFontType('bold')
            this.doc.text(x + 1, y + 48, 'Tipo Serviços :')
            for (var j = 0; j < data[i]['servicos'].length; j++) {
                var soma = data[i]['servicos'][j].preco
                total = parseFloat(total) + soma
                // var valor: any = parseFloat(valor + soma)
                this.doc.setFontType('')
                this.doc.text(x + b, y + 48, data[i]['servicos'][j].nome + ',')
                b = b + 35
            }

            total = total.toFixed(2)

            this.doc.setFontType('bold')
            this.doc.text(x + 155, y + 48, 'Valor Total :')
            this.doc.setFontType('')
            this.doc.text(x + 178, y + 48, total)
        }
    }


    public downloadDadosList(){

        let doc = new jsPDF();

        doc.fromHTML(
            $('.content').value()
                .get(0), 10,20,{
                'width': 200
            });
        // doc.rect(15,25,180,6)
        //
        // doc.setFontSize(11)
        // doc.setFontType('bold')
        // doc.text(16,30, 'Codigo:')



        // let specialElementHandlers = {
        //     '#editor': function (element, renderer) {
        //         return true;
        //     }
        // };
        // let content = this.content.nativeElement;
        // doc.fromHTML(content.innerHTML, 15, 15, {
        //     'width': 190,
        //     'elementHandlers': specialElementHandlers
        // });
        doc.save('teste.pdf');
    }
    // public downloadDadosList(){
    //     return xepOnline.Formatter.Format('content', {render: 'download'});
    // }

    json(obj) {
        return JSON.stringify(obj, null, '  ');
    }


}
