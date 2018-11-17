import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-admin-noticias',
  templateUrl: './admin-noticias.component.html',
  styleUrls: ['./admin-noticias.component.css']
})
export class AdminNoticiasComponent implements OnInit {
  noticias$ = null;
  ordem = 'id';
  pesquisa = null;
  filtrar_por_autor = null;
  autores$ = null;
  resultado_excluir = null;
  erro_excluir = null;
  filtrar_por_publicada = null;

  constructor(private service: NoticiasService,
    private router: Router,
    private autores: AutoresService) { }

  ngOnInit() {
    this.noticias$ = this.service.todas();
    this.autores$ = this.autores.todos();
  }

  ordenarPor(ordem) {
    this.ordem = ordem;
    this.carregarDados();
  }

  carregarDados() {
    this.noticias$ = this.service.todas(this.ordem, this.pesquisa, this.filtrar_por_autor, this.filtrar_por_publicada);
  }

  excluir(noticia) {
    if (confirm('Tem certeza que deseja excluir a notícia "' + noticia.titulo + '"?\n\nEssa operação é irreversível.')) {
      this.service.excluir(noticia.id).subscribe(
        r => {
          this.carregarDados();
          this.resultado_excluir = true;
        },
        erro => {
          this.resultado_excluir = false;
          this.erro_excluir = erro.message;
        }
      );
    }
  }

  filtrarPublicada(tipo) {
    this.filtrar_por_publicada = tipo;
    this.carregarDados();
  }
}
