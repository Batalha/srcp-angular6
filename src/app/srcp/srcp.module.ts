import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {SrcpRoutingModule} from "./srcp-routing/srcp-routing.module";
import {SrcpComponent} from "./srcp.component";
import {HomeComponent} from "./home/home.component";

import {MessageService} from "./bootstrap/message.service";
import {ClienteService} from "./cliente/cliente.service";
import {ServicoService} from "./servico/servico.service";
import {ChamadoService} from "./chamado/chamado.service";

import {AlertComponent} from "./bootstrap/alert/alert.component";
import {ClienteListComponent} from "./cliente/cliente-list/cliente-list.component";
import {ClienteNewComponent} from "./cliente/cliente-new/cliente-new.component";
import {ClienteViewComponent} from "./cliente/cliente-view/cliente-view.component";
import {ClienteCardComponent} from "./cliente/cliente-card/cliente-card.component";
import {NgxMaskModule} from "ngx-mask";

import {ServicoListComponent} from "./servico/servico-list/servico-list.component";
import {ServicoNewComponent} from "./servico/servico-new/servico-new.component";
import {AlertServicoComponent} from "./bootstrap/alert-servico/alert-servico.component";
import {ServicoCardComponent} from "./servico/servico-card/servico-card.component";
import {CurrencyMaskModule} from "ng2-currency-mask";

import {ChamadoListComponent} from "./chamado/chamado-list/chamado-list.component";
import {ChamadoCardComponent} from "./chamado/chamado-card/chamado-card.component";
import {ChamadoNewComponent} from "./chamado/chamado-new/chamado-new.component";
import {ChamadoViewComponent} from "./chamado/chamado-view/chamado-view.component";
import {FilterPipe} from "./chamado/filter.pipe";
import {NguiAutoCompleteModule} from "@ngui/auto-complete";
import { ListaComponent } from './lista/lista.component';
import {ReplacePipe} from "./pipes/replace/replace.pipe";


@NgModule({

  declarations: [
      SrcpComponent,
      HomeComponent,

      AlertComponent,
      ClienteListComponent,
      ClienteNewComponent,
      ClienteViewComponent,
      ClienteCardComponent,

      ServicoListComponent,
      ServicoNewComponent,
      AlertServicoComponent,
      ServicoCardComponent,

      ChamadoListComponent,
      ChamadoCardComponent,
      ChamadoNewComponent,
      ChamadoViewComponent,
      FilterPipe,
      ListaComponent,
      ReplacePipe
  ],
  imports: [
    CommonModule,
    SrcpRoutingModule,
    FormsModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(),
    NguiAutoCompleteModule,
  ],
  exports: [SrcpComponent],

  providers:[MessageService, ServicoService, ClienteService, ChamadoService]
})
export class SrcpModule { }
