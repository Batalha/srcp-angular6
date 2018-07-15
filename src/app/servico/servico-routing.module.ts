import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {NewComponent} from './new/new.component';

const servicoRoute = [
    {path: 'srcp/servico', component: ListComponent},
    {path: 'srcp/servico/new', component: NewComponent},
    {path: 'srcp/servico/:id/edit', component: NewComponent}
]


@NgModule({
  imports: [ RouterModule.forChild(servicoRoute) ],
  exports: [ RouterModule ],
  declarations: []
})
export class ServicoRoutingModule { }
