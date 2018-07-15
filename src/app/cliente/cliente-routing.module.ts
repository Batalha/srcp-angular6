import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {NewComponent} from './new/new.component';
import {ViewComponent} from './view/view.component';

const clienteRoute = [
    {path: 'srcp/cliente', component: ListComponent},
    {path: 'srcp/cliente/new', component: NewComponent},
    {path: 'srcp/cliente/:id/view', component: ViewComponent},
    {path: 'srcp/cliente/:id/edit', component: NewComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(clienteRoute) ],
  exports: [ RouterModule ],
  declarations: []
})
export class ClienteRoutingModule { }
