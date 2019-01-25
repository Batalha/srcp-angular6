import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    errorCredentials = false;

    user = {
        email: '',
        password:''
    }

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {

    }

    onSubmitAuth() {
        this.auth.login(this.user).subscribe((data) => {
                    this.router.navigate(['/srcp']);
                },(errorResponse: HttpErrorResponse) => {
                    if (errorResponse.status === 401){
                        this.errorCredentials = true;
                    }
                }
        );
    }

}
