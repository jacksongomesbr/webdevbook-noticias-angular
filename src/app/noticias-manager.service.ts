import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiasManagerService {
  /** A lista das notícias */
  noticias = [];

  /** Uma variável de controle para o identificador das notícias */
  proximoId = 1;

  /** A lista das categorias */
  categorias = ['Política', 'Economia', 'Esporte', 'Entretenimento'];

  constructor() { }

  /**
   * O método recebe os dados de uma notícia, cria um objeto e o adiciona
   * na lista das notícias
   * 
   * @param titulo O título da notícia
   * @param conteudo O conteúdo da notícia
   * @param categoria A categoria da notícia
   */
  salvar(titulo: string, conteudo: string, categoria: string) {
    /** cria um objeto para representar a notícia */
    const noticia = {
      id: this.proximoId,
      titulo: titulo,
      conteudo: conteudo,
      categoria: categoria,
      visivel: false
    };

    /** adiciona o objeto na lista das notícias */
    this.noticias.push(noticia);

    /** incrementa a variável de controle do identificador da notícia */
    this.proximoId++;
  }

  /**
   * Retorna a lista das notícias.
   */
  lista() {
    return this.noticias;
  }

  /**
   * Retorna a lista das categorias de notícias.
   */
  listaDeCategorias() {
    return this.categorias;
  }

  /**
   * Calcula e retorna as estatísticas das notícias
   * em categorias, ou seja, para cada categoria de notícia,
   * qual a quantidade de notícias da mesma.
   */
  estatisticasDeCategorias() {
    let estatisticas = [];
    let estatisticasIdx = {};
    for (const categoria of this.categorias) {
      estatisticasIdx[categoria] = estatisticas.length;
      estatisticas.push({ nome: categoria, valor: 0 });
    }
    for (const noticia of this.noticias) {
      estatisticas[estatisticasIdx[noticia.categoria]].valor++;
    }
    return estatisticas;
  }
}
