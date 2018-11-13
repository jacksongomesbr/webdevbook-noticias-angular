import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Database } from './database.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  API_URL = 'http://localhost:8000/api/categorias/';
  constructor(private http: HttpClient, private auth: AutenticacaoService) { }

  public todas() {
    return this.http.get(this.API_URL);
  }
  public encontrar(id: number) {
    return this.http.get(this.API_URL + id + '/');
  }
  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }
  public excluir(id: Number) {
    const options = this.getHeaders();
    return this.http.delete(this.API_URL + id + '/', options);
  }
}
