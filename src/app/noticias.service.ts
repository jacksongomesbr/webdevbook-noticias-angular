import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';
import { HttpClient } from '@angular/common/http';
import { filter, map, tap, concat, mergeMap, concatMap, concatAll } from 'rxjs/operators';
import { Database } from './database.model';
import { forkJoin, from, of } from 'rxjs';
import { AutoresService } from './autores.service';

/**
 * Serviço que encapsula e implementa as funcionalidades de acesso a dados de notícias.
 */
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  API_URL = 'http://localhost:8000/api/noticias/';

  constructor(private http: HttpClient, private autores: AutoresService) {
  }

  /**
   * Retorna todas as notícias.
   * 
   * @returns Lista de todas as notícias
   */
  public todas() {
    return this.http.get(this.API_URL)
      .pipe(
        tap(r => console.log(r))
      );
  }

  /**
   * Retorna apenas as notícias publicadas.
   * 
   * Utiliza os métodos da classe {@link Array}: 
   * 
   * * `filter()`: para encontrar apenas as notícias publicadas, usando o método 
   * [`estahPublicada()`]{@link Noticia#estahPublicada} da classe {@link Noticia}
   * * `sort()`: para ordenar as notícias de forma decrescente pela data
   * 
   * @param q A quantidade notícias para retornar (padrão = `null`, para retornar todas as notícias)
   * @param excluirDestaque Indica se deve ou não excluir a notícia de destaque da lista (padrão = `true`)
   * @returns Lista das notícias publicadas
   */
  public publicadas(q: number = null, excluirDestaque: boolean = false) {
    let url = this.API_URL + '?publicada=true';
    if (excluirDestaque) {
      url += '&destaque=false';
    }
    return this.http.get(url);
  }

  /**
   * Encontra e retorna uma notícia com base no identificador.
   * 
   * @param id O identificador da notícia
   * @returns A notícia encontrada
   */
  public encontrar(id: number) {
    const url = this.API_URL + id + '/';
    return this.http.get(url)
      .pipe(
        map((noticia: Noticia) => {
          return forkJoin(of(noticia),
            this.http.get(noticia.autor));
        }),
        concatAll(),
        map(([noticia, autor]) => {
          noticia.autor = autor;
          return noticia;
        }),
        tap(r => console.log(r))
      );
  }

  /**
   * Encontra e retorna a notícia de destaque.
   * 
   * @returns A notícia encontrada
   */
  public noticiaDestaque() {
    const url = this.API_URL + '?destaque=true';
    return this.http.get(url)
      .pipe(
        map((noticias: Noticia[]) => {
          if (noticias.length > 0) {
            return noticias[0];
          } else {
            return [];
          }
        })
      );
  }

}
