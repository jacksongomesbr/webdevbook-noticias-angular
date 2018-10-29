import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor() { }

  estahLogado() {
    const username = localStorage.getItem('username');
    if (username) {
      return true;
    } else {
      return false;
    }
  }
}
