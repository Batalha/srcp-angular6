import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ClienteListComponent} from "../cliente/cliente-list/cliente-list.component";
import {ClienteNewComponent} from "../cliente/cliente-new/cliente-new.component";
import {ClienteViewComponent} from "../cliente/cliente-view/cliente-view.component";

import {ServicoListComponent} from "../servico/servico-list/servico-list.component";
import {ServicoNewComponent} from "../servico/servico-new/servico-new.component";
import {SrcpComponent} from "../srcp.component";

import {ChamadoListComponent} from "../chamado/chamado-list/chamado-list.component";
import {ChamadoNewComponent} from "../chamado/chamado-new/chamado-new.component";
import {ChamadoViewComponent} from "../chamado/chamado-view/chamado-view.component";

import {HomeComponent} from "../home/home.component";
import {AuthGuard} from "../../guards/auth.guard";
import {ListaComponent} from "../lista/lista.component";
import {TrocarSenhaComponent} from "../../auth/trocar-senha/trocar-senha.component";

const srcpRoute = [

    {
        path: 'srcp', component: SrcpComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
            {path: '', redirectTo: 'cliente', pathMatch: 'full'},

            {path: 'cliente', component: ClienteListComponent},
            {path: 'cliente/new', component: ClienteNewComponent},
            {path: 'cliente/:id/view', component: ClienteViewComponent},
            {path: 'cliente/:id/edit', component: ClienteNewComponent},

            {path: 'servico', component: ServicoListComponent},
            {path: 'servico/new', component: ServicoNewComponent},
            {path: 'servico/:id/edit', component: ServicoNewComponent},

            {path: 'chamado', component: ChamadoListComponent},
            {path: 'chamado/lista', component: ListaComponent},
            {path: 'chamado/gerarpdf', component: ListaComponent},
            {path: 'chamado/new', component: ChamadoNewComponent},
            {path: 'chamado/:id/view', component: ChamadoViewComponent},
            {path: 'chamado/:id/edit', component: ChamadoNewComponent},

            {path: 'home', component: HomeComponent},
        ]
    },
    {path: 'srcp/cliente', component: SrcpComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'srcp/trocar_senha', component: TrocarSenhaComponent}
]


@NgModule({
    imports: [RouterModule.forChild(srcpRoute)],
    exports: [RouterModule],
    declarations: []
})
export class SrcpRoutingModule {
}
