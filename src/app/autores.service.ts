import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Database } from './database.model';
import { map } from 'rxjs/operators';
import { Autor } from './autor.model';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  API_URL = 'http://localhost:8000/api/pessoas/';

  constructor(private http: HttpClient, private auth: AutenticacaoService) { }

  public todos() {
    const headers = this.getHeaders();
    return this.http.get(this.API_URL, headers);
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
}
