import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Noticia } from '../noticia.model';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';

/**
 * Componente que implementa a funcionalidade de apresentar a lista de notícias recentes.
 * 
 * O componente recebe como entrada a lista de notícias. Cada item da lista pode ser clicado e,
 * quando isso acontecer, o componente gera uma navegação para a rota 'noticias/:id',
 * permitindo a leitura da notícia desejada.
 */
@Component({
  selector: 'app-noticias-recentes',
  templateUrl: './noticias-recentes.component.html',
  styleUrls: ['./noticias-recentes.component.css']
})
export class NoticiasRecentesComponent implements OnInit {
  /**
   * A notícia de destaque
   */
  noticia_destaque: Noticia;

  constructor(private noticias: NoticiasService,
    private router: Router) { }

  ngOnInit() {
    this.noticia_destaque = this.noticias.noticiaDestaque();
  }

  /**
   * Apresenta uma notícia (para leitura).
   * 
   * Este método utiliza o `Router` para gerar uma navegação para a rota `noticias/:id`,
   * permitindo a leitura da notícia em questão.
   * 
   * @param noticia A notícia que deve ser apresentada
   */
  mostrar(noticia: Noticia) {
    this.router.navigate(['noticias', noticia.id]);
  }

}
