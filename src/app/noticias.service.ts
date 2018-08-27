import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

/**
 * Serviço que encapsula e implementa as funcionalidades de acesso a dados de notícias.
 */
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  /**
   * A lista de notícias
   */
  lista: Array<Noticia> = [];

  constructor() {
    this.lista.push(new Noticia(1, 'Teste de notícia',
      'Conteúdo da noíticia de teste',
      'José da Silva', 'jose@gmail.com',
      new Date()));
  }

  /**
   * Retorna todas as notícias.
   * 
   * @returns Lista de todas as notícias
   */
  public todas() {
    return this.lista;
  }

  /**
   * Retorna apenas as notícias publicadas.
   * 
   * Utiliza os métodos da classe {@link Array}: 
   * 
   * * `filter()`: para encontrar apenas as notícias publicadas, usando o método 
   * [`estahPublicada()`]{@link Noticia#estahPublicada} da classe {@link Noticia}
   * * `sort()`: para ordenar as notícias de forma decrescente pela data
   * @returns Lista das notícias publicadas
   */
  public publicadas() {
    return this.lista
      .filter(n => n.estahPublicada())
      .sort((a: Noticia, b: Noticia) => {
        if (b.data < a.data) {
          return -1;
        } else if (b.data > a.data) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  public encontrar(id: number): Noticia {
    return this.lista.find(n => n.id === id);
  }
}
