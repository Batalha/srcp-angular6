import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable()
export class ServicoService {

    private url = 'http://localhost:8000/srcp/servico';

    constructor(private http: HttpClient) {
    }


    getListServico(): Observable<any> {
        return this.http.get(this.url)
    }

    edite(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}/edit`);
    }

    update(data: any): Observable<any> {
        return this.http.put(`${this.url}/${data.id}`, data);
    }

    save(data: any): Observable<any> {
        return this.http.post(this.url, data);
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`)
    }

    addServicoOs(data: any): Observable<any> {
        return this.http.post(this.url, data);
    }


}
