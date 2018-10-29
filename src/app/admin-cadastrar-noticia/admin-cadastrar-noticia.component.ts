import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { AutoresService } from '../autores.service';

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

  constructor(private noticias_service: NoticiasService, private autores_service: AutoresService) { }

  ngOnInit() {
    this.autores = this.autores_service.todos();
  }

  salvar() {
    this.noticias_service.salvar(this.titulo, this.resumo, this.conteudo, this.autor,
      '2018-10-29 20:00:00', false, false).subscribe(
        noticia => {
          this.salvar_ok = true;
        },
        erro => {
          console.log(erro);
          this.salvar_erro = true;
        }
      )
  }
}
