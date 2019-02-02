import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MessageService} from '../message.service';

declare let $;

@Component({
  selector: 'app-alert-servico',
  templateUrl: './alert-servico.component.html',
  styleUrls: ['./alert-servico.component.scss']
})
export class AlertServicoComponent implements OnInit {

    @Input()
    cor = 'success';

    @Input()
    timeout = null;

    @ViewChild('divAlert')
    divAlert: ElementRef;

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {

        if (this.timeout) {
            setTimeout(() => {
                $(this.divAlert.nativeElement).alert('close');
            }, this.timeout);
            this.messageService.messageCliente = null;
            this.messageService.messageChamado = null;
            this.messageService.messageServico = null;
            this.messageService.messagePass = null;
        }

    }

}
