import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Noticia } from '../noticia.model';

/**
 * Componente que implementa a funcionalidade de apresentar a lista de notícias recentes.
 * 
 * O componente recebe como entrada a lista de notícias. Cada item da lista pode ser clicado e,
 * quando isso acontecer, o componente dispara um evento para permitir o componente host,
 * saber qual notícia foi clicada e executar alguma lógica a partir disso.
 */
@Component({
  selector: 'app-noticias-recentes',
  templateUrl: './noticias-recentes.component.html',
  styleUrls: ['./noticias-recentes.component.css']
})
export class NoticiasRecentesComponent implements OnInit {

  /**
   * A propriedade de entrada que representa a lista de notícias que devem ser apresentadas
   */
  @Input()
  noticias;

  /**
   * O evento que permite o componente host saber quando e qual notícia foi clicada
   */
  @Output()
  mostrou = new EventEmitter<Noticia>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Método utilizado como tratador para o evento `mostrou`. 
   * 
   * O parâmetro `noticia` é informado para o componente host por meio do método `emit()`
   * do atributo `mostrou`.
   * 
   * @param noticia A notícia que foi clicada pelo usuário
   */
  mostrar(noticia) {
    this.mostrou.emit(noticia);
  }
}
