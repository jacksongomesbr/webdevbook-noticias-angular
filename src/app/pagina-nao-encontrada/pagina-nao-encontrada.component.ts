import { Component, OnInit } from '@angular/core';

/**
 * Componente que apresenta uma mensagem indicando que alguma página solicitada
 * não foi encontrada.
 */
@Component({
  selector: 'app-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrls: ['./pagina-nao-encontrada.component.css']
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
