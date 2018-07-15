import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChamadoService {

    private url = 'http://localhost:8000/srcp/chamado';

  constructor(private http: HttpClient) { }


    getChamadoList(): Observable<any> {
        return this.http.get(this.url);
    }

    view(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    save(data: any): Observable<any> {
        return this.http.post(this.url, data);
    }

}
