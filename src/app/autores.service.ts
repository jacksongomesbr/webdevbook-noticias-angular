import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Database } from './database.model';
import { map } from 'rxjs/operators';
import { Autor } from './autor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  API_URL = 'http://localhost:8000/api/pessoas/';

  constructor(private http: HttpClient) { }

  public todos() {
    return this.http.get(this.API_URL);
  }

  public encontrar(id: number) {
    return this.http.get(this.API_URL + id + '/');
  }
}
