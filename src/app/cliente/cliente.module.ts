import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {ClienteRoutingModule} from './cliente-routing.module';
import {FormsModule} from '@angular/forms';
import {ClienteService} from './cliente.service';
import {NewComponent} from './new/new.component';
import {AlertComponent} from '../bootstrap/alert/alert.component';
import {MessageService} from '../bootstrap/message.service';
import {ViewComponent} from './view/view.component';
import {ClienteCardComponent, } from './cliente-card/cliente-card.component';


@NgModule({
    declarations: [
        ListComponent,
        NewComponent,
        AlertComponent,
        ViewComponent,
        ClienteCardComponent


    ],
    imports: [
        CommonModule,
        ClienteRoutingModule,
        FormsModule
    ],

    providers: [ClienteService, MessageService]
})
export class ClienteModule {
}
