import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

import {TokenInterceptor} from "./interceptors/token-interceptor";
import {RefreshTokenInterceptor} from "./interceptors/refresh-token-interceptor";
import {AppErrorHandle} from "./app-error-handle";
import {AppRoutingModule} from './app-routing.module';
import {SrcpModule} from "./srcp/srcp.module";
import {AuthModule} from "./auth/auth.module";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AuthModule,
        SrcpModule
    ],
    providers: [
        AuthGuard,
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true},
        {provide: ErrorHandler, useClass: AppErrorHandle},

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
