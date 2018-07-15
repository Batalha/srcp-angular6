import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChamadoRoutingModule} from './chamado-routing.module';
import {FormsModule} from '@angular/forms';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {ListComponent} from './list/list.component';
import {ChamadoService} from './chamado.service';
import {ChamadoCardComponent} from './chamado-card/chamado-card.component';
import {ViewComponent} from './view/view.component';
import {NewComponent} from './new/new.component';
import {FilterPipe} from './filter.pipe';

@NgModule({
    declarations: [
        ListComponent,
        ChamadoCardComponent,
        NewComponent,
        ViewComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        ChamadoRoutingModule,
        FormsModule,
        NguiAutoCompleteModule
    ],
    providers: [ChamadoService]
})

export class ChamadoModule {
}
