import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class ClienteService {


    private url = 'http://localhost:8000/srcp/cliente';

    constructor(private http: HttpClient) {
    }

    getClienteList(): Observable<any> {
        return this.http.get(this.url);
    }

    view(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    edite(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}/edit`);
    }

    update(data: any): Observable<any> {
        return  this.http.put(`${this.url}/${data.id}`, data);
    }

    save(data: any): Observable<any> {
        return this.http.post(this.url, data);
    }

    destroy(id: number): Observable<any>{ //status 04
        return this.http.delete(`${this.url}/${id}`)
    }
}
