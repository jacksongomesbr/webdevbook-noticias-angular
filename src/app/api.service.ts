import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap, concat, mergeMap, concatMap, concatAll } from 'rxjs/operators';
import { forkJoin, from, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
}


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  API_URL = 'http://localhost:8000/api/auth/';

  constructor(private http: HttpClient) { }

  autenticar(login: string, senha: string) {
    return this.http.post(this.API_URL, { username: login, password: senha });
  }

  armazenarCredenciais(login: string, senha: string) {
    localStorage.setItem('username', login);
    localStorage.setItem('password', senha);
  }

  estahLogado() {
    const username = localStorage.getItem('username');
    if (username) {
      return true;
    } else {
      return false;
    }
  }

  sair() {
    localStorage.clear();
  }

  getCredenciais() {
    if (!this.estahLogado()) {
      return null;
    }
    const credenciais = {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password')
    };
    return credenciais;
  }
}
