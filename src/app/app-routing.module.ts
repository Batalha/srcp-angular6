import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./auth/login/login.component";

const route = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(route)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
