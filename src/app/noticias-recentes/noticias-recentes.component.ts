import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Noticia } from '../noticia.model';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

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
  noticia_destaque_erro = false;
  noticias_publicadas$ = null;
  noticias_publicadas_erro = false;

  constructor(private noticias: NoticiasService,
    private router: Router) { }

  ngOnInit() {
    this.noticias.noticiaDestaque()
      .subscribe(
        noticia => {
          this.noticia_destaque = noticia;
          this.noticia_destaque_erro = false;
        },
        error => this.noticia_destaque_erro = true);
    this.noticias_publicadas$ = this.noticias.publicadas(3, true)
      .pipe(
        catchError((error) => {
          console.error('erro ao carregar lista de notícias publicadas', error);
          this.noticias_publicadas_erro = true;
          return of();
        })
      );
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
