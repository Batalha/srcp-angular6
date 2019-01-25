import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChamadoService {

    private url = 'http://localhost:8000/srcp/chamado';
    private urlLista = 'http://localhost:8000/srcp/chamado/lista';
    private urlPdf = 'http://localhost:8000/srcp/chamado/gerarpdf';

  constructor(private http: HttpClient) { }


    getChamadoList(): Observable<any> {
        return this.http.get(this.url);
    }

    getChamadoListDados(data: any): Observable<any> {
        return this.http.post(this.urlLista, data);
    }

    gerarPdf(data: any): Observable<any> {
        return this.http.post(this.urlPdf, data);
    }

    view(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    save(data: any): Observable<any> {
        return this.http.post(this.url, data);
    }

    edite(id: number): Observable<any> {
        return this.http.get(`${this.url}/${id}`);
    }

    update(data: any): Observable<any> {
        return  this.http.put(`${this.url}/${data.id}`, data);
    }

    destroyServico(data: any): Observable<any> {
        return  this.http.put(`${this.url}/${data.id}`, data);
    }


    destroy(id: number): Observable<any>{ //status 04
        return this.http.delete(`${this.url}/${id}`)
    }

}
