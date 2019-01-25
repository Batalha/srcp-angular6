import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';
import {CompareValidatorDirective} from "./compare/compare-validator.directive";

@NgModule({
    declarations: [
        LoginComponent,
        CompareValidatorDirective,
        TrocarSenhaComponent

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {
}
