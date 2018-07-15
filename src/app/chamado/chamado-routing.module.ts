import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import {ViewComponent} from './view/view.component';
import {NewComponent} from './new/new.component';

const chamadoRoutes = [
    {path: 'srcp/chamado', component: ListComponent},
    {path: 'srcp/chamado/new', component: NewComponent},
    {path: 'srcp/chamado/:id/view', component: ViewComponent}
];

@NgModule({
    imports: [RouterModule.forChild(chamadoRoutes)],
    exports: [RouterModule]
})
export class ChamadoRoutingModule {
}
