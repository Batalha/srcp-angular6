import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()

export class AppErrorHandle extends ErrorHandler{

    constructor(private injector: Injector){
        super();
    }

    handleError(errorResp: HttpErrorResponse | any){

        if (errorResp instanceof HttpErrorResponse){
            const error = (typeof errorResp.error !== 'object') ? JSON.parse(errorResp.error) : errorResp.error;

            if (errorResp.status === 400 &&
                (error.error === 'token_expired' ||
                    error.error === 'token_invalid' ||
                    error.error === 'A token is required' || error.error === 'token_not_provided')){
                this.goToLogin();
            }
            if (errorResp.status === 401 && error.error === 'token_has_been_blacklisted'){
                this.goToLogin();
            }
        }

        super.handleError(errorResp);
    }

    goToLogin(): void{
        const router = this.injector.get(Router);
        router.navigate(['/login']);
    }

}
