import { Component } from '@angular/core';
import { NoticiasManagerService } from './noticias-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** O título da notícia */
  titulo = null;

  /** O conteúdo da notícia */
  conteudo = null;

  /** A categoria da notícia */
  categoria = null;

  /**
   * O construtor da classe
   * @param noticias Uma instânia de NoticiasManagerService
   */
  constructor(private noticias: NoticiasManagerService) {
  }

  /**
   * Obtém os dados vinculados ao formulário e interage com o serviço
   * NoticiasManagerService para salvar a notícia.
   * 
   * @param form Uma referência ao formulário declarado no template
   */
  salvar(form) {
    this.noticias.salvar(this.titulo, this.conteudo, this.categoria);
    form.reset();
  }

  /**
   * Mostra a (apresenta o conteúdo da) notícia.
   * 
   * @param noticia A notícia a ser apresentada
   */
  mostrar(noticia) {
    noticia.visivel = true;
  }

  /**
   * Fecha a (oculta o conteúdo da) notícia.
   * 
   * @param noticia A notícia a ser fechada
   */
  fechar(noticia) {
    noticia.visivel = false;
  }
}
