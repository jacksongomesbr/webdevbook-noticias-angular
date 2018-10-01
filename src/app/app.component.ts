import { Component, OnInit } from '@angular/core';
import { Noticia } from './noticia.model';

/**
 * Componente AppComponent.
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * Variável de controle para a navbar
   */
  isNavbarCollapsed = true;

  /**
   * Implementação da interface {@link OnInit}
   */
  ngOnInit() {

  }
}
