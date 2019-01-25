import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {tap} from "rxjs/internal/operators";
import {Router} from "@angular/router";
import {User} from "./interfaces/user";
// import 'rxjs/add/operator/toPromise';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private url = 'http://localhost:8000';
    private urlUpdate = 'http://localhost:8000/srcp/trocar_senha';

    constructor(private http: HttpClient, private router: Router) {
    }

    check(): boolean {
        return localStorage.getItem('user') ? true : false;
    }

    login(data: any): Observable<any> {
        return this.http.post(`${this.url}/login`, data)
            .pipe(tap(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
            }))
    }

    logout(): void {
        this.http.get(`${this.url}/logout`)
            .subscribe(data => {
                localStorage.clear();
                this.router.navigate(['/login']);
            })
    }

    getUser(): User {
        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    }

    setUser(): Promise<boolean> {
        return this.http.get<any>(`${this.url}/me`)
            .toPromise()
            .then(data => {
                if (data.user) {
                    localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                    return true;
                }
                return false;
            })
    }

    update(data: any): Observable<any> {
        return this.http.put(`${this.urlUpdate}/${this.getUser().id}`, data);
    }

}
