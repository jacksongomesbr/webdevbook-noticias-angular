import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Database } from './database.model';
import { map } from 'rxjs/operators';
import { Autor } from './autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  DB_URL = 'assets/db.json';

  constructor(private http: HttpClient) { }

  public todos() {
    return this.http.get(this.DB_URL)
      .pipe(
        map<Database, Array<Autor>>(dados => dados.autores)
      );
  }

  public encontrar(id: number) {
    return this.todos()
      .pipe(
        map<Array<Autor>, Autor>(autores => {
          return autores.find(autor => autor.id === id);
        })
      );
  }
}
