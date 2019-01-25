import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/index";


@Injectable()

export class TokenInterceptor implements HttpInterceptor {

    private url = 'http://localhost:8000'

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const reqUrl: Array<any> = req.url.split('/');
        const webUrl: Array<any> = this.url.split('/');
        const token = localStorage.getItem('token');

        if (token && (reqUrl[2] == webUrl[2])) {
            const newReq = req.clone({setHeaders: {'Authorization': `Bearer ${token}`}});
            return next.handle(newReq);
        } else {
            return next.handle(req);
        }
    }


}
