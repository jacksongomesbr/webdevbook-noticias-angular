import { Component, OnInit } from '@angular/core';
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
  lista = null;

  constructor(private noticias: NoticiasService) { }

  ngOnInit() {
    this.lista = this.noticias.publicadas();
  }

}
