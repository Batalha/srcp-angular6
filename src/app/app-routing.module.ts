import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

const route: Routes = [
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'srcp/home', component: HomeComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(route)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
