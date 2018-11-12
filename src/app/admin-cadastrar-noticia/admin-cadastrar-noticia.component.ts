import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { AutoresService } from '../autores.service';
import { Noticia } from '../noticia.model';

@Component({
  selector: 'app-admin-cadastrar-noticia',
  templateUrl: './admin-cadastrar-noticia.component.html',
  styleUrls: ['./admin-cadastrar-noticia.component.css']
})
export class AdminCadastrarNoticiaComponent implements OnInit {
  titulo = null;
  autores = null;
  autor = null;
  resumo = null;
  conteudo = null;
  data = null;
  destaque = false;
  publicada = false;
  salvar_ok = false;
  salvar_erro = false;
  slug = null;
  arquivo = null;

  constructor(private noticias_service: NoticiasService, private autores_service: AutoresService) { }

  ngOnInit() {
    this.autores = this.autores_service.todos();
  }

  salvar() {
    this.noticias_service.salvar(this.titulo, this.resumo, this.conteudo, this.autor,
      this.data, this.publicada, this.destaque).subscribe(
        (noticia: Noticia) => {
          this.noticias_service.salvarFoto(noticia.id, this.arquivo)
            .subscribe(n => {
              this.salvar_ok = true;
            });
        },
        erro => {
          console.log(erro);
          this.salvar_erro = true;
        }
      );
  }

  selecionarArquivo(event) {
    this.arquivo = event.target.files[0];
  }

  /**
   * Função para gerar slug.
   * @see https://medium.com/@matthagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
   * @param string A string utilizada como base para criar a slug
   */
  slugify(string) {
    const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return string.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-') // Replace multiple — with single -
      .replace(/^-+/, ''); // Trim — from start of text .replace(/-+$/, '') // Trim — from end of text
  }

  slugify_titulo() {
    this.slug = this.slugify(this.titulo);
  }
}
