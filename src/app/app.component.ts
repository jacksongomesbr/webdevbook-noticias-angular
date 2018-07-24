import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias = [];
  titulo = null;
  conteudo = null;

  salvar() {
    const noticia = {
      id: this.noticias.length,
      titulo: this.titulo,
      conteudo: this.conteudo,
      visivel: false
    };
    this.noticias.push(noticia);
    this.titulo = null;
    this.conteudo = null;
  }

  mostrar(noticia) {
    noticia.visivel = true;
  }

  fechar(noticia) {
    noticia.visivel = false;
  }
}
