import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServicoRoutingModule} from './servico-routing.module';
import {FormsModule} from '@angular/forms';
import {ServicoService} from './servico.service';
import { ListComponent } from './list/list.component';
import {ServicoCardComponent} from './servico-card/servico-card.component';
import { NewComponent } from './new/new.component';
import {MessageService} from '../bootstrap/message.service';
import {AlertServicoComponent} from '../bootstrap/alert-servico/alert-servico.component';

@NgModule({
  declarations: [
    ListComponent,
    NewComponent,
    AlertServicoComponent,
    ServicoCardComponent

  ],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormsModule

  ],

  providers: [ServicoService, MessageService]
})
export class ServicoModule { }
