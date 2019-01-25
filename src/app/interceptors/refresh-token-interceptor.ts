import {Injectable, Injector} from '@angular/core';
import {
    HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';
import {mergeMap} from "rxjs/internal/operators";


@Injectable()

export class RefreshTokenInterceptor implements HttpInterceptor {

    private url = 'http://localhost:8000';

    constructor(private injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req)
            .pipe(
                catchError((errorResponse: HttpErrorResponse) => {
                    const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
                    console.log(error.error.error)
                    if (errorResponse.status === 401 && error.error.error === 'token_expired') {

                        const http = this.injector.get(HttpClient);

                        return http.post<any>(`${this.url}/refresh`, {})
                            .pipe(
                                mergeMap(data => {
                                    localStorage.setItem('token', data.token)
                                    let cloneRequest = req.clone({setHeaders: {'Authorization': `Bearer ${data.token}`}})
                                    return next.handle(cloneRequest);
                                })
                            )
                    }

                    return throwError(errorResponse);
                })
            )
    }
}
