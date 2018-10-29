import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, tap, concat, mergeMap, concatMap, concatAll, take } from 'rxjs/operators';
import { Database } from './database.model';
import { forkJoin, from, of } from 'rxjs';
import { AutoresService } from './autores.service';
import { AutenticacaoService } from './api.service';

/**
 * Serviço que encapsula e implementa as funcionalidades de acesso a dados de notícias.
 */
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  API_URL = 'http://localhost:8000/api/noticias/';

  constructor(private http: HttpClient, private autores: AutoresService, private auth: AutenticacaoService) {
  }

  /**
   * Retorna todas as notícias.
   * 
   * @returns Lista de todas as notícias
   */
  public todas() {
    const options = this.getHeaders();
    return this.http.get(this.API_URL, options)
      .pipe(
        tap(r => console.log(r))
      );
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

  /**
   * Retorna apenas as notícias publicadas.
   * 
   * @param q A quantidade notícias para retornar (padrão = `null`, para retornar todas as notícias)
   * @param excluirDestaque Indica se deve ou não excluir a notícia de destaque da lista (padrão = `true`)
   * @returns Lista das notícias publicadas
   */
  public publicadas(q: number = null, excluirDestaque: boolean = false) {
    const options = this.getHeaders();
    let url = this.API_URL + '?publicada=true';
    if (excluirDestaque) {
      url += '&destaque=false';
    }
    return this.http.get(url, options);
  }

  /**
   * Encontra e retorna uma notícia com base no identificador.
   * 
   * @param id O identificador da notícia
   * @returns A notícia encontrada
   */
  public encontrar(id: number) {
    const options = this.getHeaders();
    const url = this.API_URL + id + '/';
    return this.http.get(url, options);
  }

  /**
   * Encontra e retorna a notícia de destaque.
   * 
   * @returns A notícia encontrada
   */
  public noticiaDestaque() {
    const options = this.getHeaders();
    const url = this.API_URL + '?destaque=true';
    return this.http.get(url, options)
      .pipe(
        take(1)
      );
  }

  public salvar(titulo: string, resumo: string, conteudo: string, autor: any, data: string, publicada: boolean, destaque: boolean) {
    const options = this.getHeaders();
    const noticia = {
      titulo: titulo,
      resumo: resumo,
      conteudo: conteudo,
      autor: autor,
      data: data,
      publicada: publicada,
      destaque: destaque
    };
    return this.http.post(this.API_URL, noticia, options);
  }
}
