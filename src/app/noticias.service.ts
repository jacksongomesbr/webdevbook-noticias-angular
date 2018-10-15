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
  DB_URL = 'assets/db.json';

  constructor(private http: HttpClient, private autores: AutoresService) {
  }

  /**
   * Retorna todas as notícias.
   * 
   * @returns Lista de todas as notícias
   */
  public todas() {
    return this.http.get(this.DB_URL)
      .pipe(
        map<Database, Array<Noticia>>(dados => dados.noticias)
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
    return forkJoin(
      this.todas()
        .pipe(
          map<Array<Noticia>, Array<Noticia>>(noticias => {
            if (excluirDestaque) {
              return noticias.filter(noticia => !noticia.destaque);
            } else {
              return noticias;
            }
          }),
          map(noticias => {
            return noticias.sort((a: Noticia, b: Noticia) => {
              if (b.data < a.data) {
                return -1;
              } else if (b.data > a.data) {
                return 1;
              } else {
                return 0;
              }
            });
          }),
        ),
      this.autores.todos()
    ).pipe(
      map(([noticias, autores]) => {
        noticias.forEach(noticia => {
          noticia.autor = autores.find(autor => autor.id === noticia.autor_id);
          return noticia;
        });
        return noticias;
      })
    );
  }

  /**
   * Encontra e retorna uma notícia com base no identificador.
   * 
   * @param id O identificador da notícia
   * @returns A notícia encontrada
   */
  public encontrar(id: number) {
    return this.todas()
      .pipe(
        map(noticias => noticias.find(noticia => noticia.id === id)),
        map((noticia: Noticia) => {
          return forkJoin(of(noticia),
            this.autores.encontrar(noticia.autor_id));
        }),
        concatAll(),
        map(([noticia, autor]) => {
          noticia.autor = autor;
          return noticia;
        }),
        tap(r => console.log(r))
      );
    // return forkJoin(this.todas()
    //   .pipe(
    //     map<Array<Noticia>, Noticia>(noticias => {
    //       return noticias.find(noticia => noticia.id === id);
    //     }),
    //     tap(r => console.log(r))
    //   ),
    //   this.autores.todos()
    // ).pipe(
    //   map(([noticia, autores]) => {
    //     if (noticia) {
    //       noticia.autor = autores.find(autor => autor.id === noticia.autor_id);
    //       return noticia;
    //     } else {
    //       return null;
    //     }
    //   })
    // );
  }

  /**
   * Encontra e retorna a notícia de destaque.
   * 
   * @returns A notícia encontrada
   */
  public noticiaDestaque() {
    return this.todas()
      .pipe(
        map<Array<Noticia>, Noticia>(noticias => {
          return noticias.find(noticia => noticia.destaque === true);
        }),
        tap(r => console.log(r))
      );
  }

}
