import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ClienteModule} from './cliente/cliente.module';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {ServicoModule} from './servico/servico.module';
import {ChamadoModule} from './chamado/chamado.module';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ClienteModule,
        ServicoModule,
        ChamadoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
