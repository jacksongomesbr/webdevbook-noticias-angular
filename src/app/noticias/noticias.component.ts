import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { NoticiasService } from '../noticias.service';

/**
 * Componente que apresenta a lista das notícias. 
 * Cada item da lista é um link para a página da notícia.
 */
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  /**
   * A lista das notícias
   */
  lista$ = null;
  lista_erro = false;

  constructor(private noticias: NoticiasService) { }

  ngOnInit() {
    this.lista$ = this.noticias.publicadas()
      .pipe(
        catchError((error) => {
          console.error('erro ao carregar dados da notícia', error);
          this.lista_erro = true;
          return of();
        })
      );
  }

}
