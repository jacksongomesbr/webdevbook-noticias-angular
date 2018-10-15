import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './noticias.service';

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
  nome=null;
  email=null;
  /**
   * Variável de controle para a navbar
   */
  isNavbarCollapsed = true;
  constructor(private noticias: NoticiasService) { }
  /**
   * Implementação da interface {@link OnInit}
   */
  ngOnInit() {    


  }
  

  adicionarNewletter(){
    console.log("teste")
    this.noticias.cadastrarUserNewsletter(this.nome,this.email)
    this.nome=null
    this.email=null
    
  }


}
