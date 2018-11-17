import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';
import { NoticiasService } from '../noticias.service';

export interface RankingAutor {
  autor: any;
  quantidade: number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  total_autores = 0;
  total_noticias = 0;
  total_noticias_publicadas = 0;
  porcentagem_noticias_publicadas = 0;
  ranking_autores = Array<RankingAutor>();

  constructor(private autores: AutoresService, private noticias: NoticiasService) { }

  /**
   * Este método realiza os seguintes procedimentos, nesta ordem:
   * 1. obtém os autores, utilizando o método `todos()` de `AutoresService`
   * 2. obtém o total de autores
   * 3. para cada autor...
   * 4. obtém as notícias publicadas pelo autor, utilizando o método `todas()` de `NoticiasService`
   * 5. obtém a quantidade de notícias publicadas pelo autor
   * 6. adiciona um novo item no ranking de autores, composto por (autor, quantidade de notícias)
   * 7. obtém as notícias, utilizando o método `todas()` de `NoticiasService`
   * 8. obtém o total de notícias
   * 9. obtém as notícias publicadas, utilizando o método `todas()` de `NoticiasService`
   * 10. obtém o total de notícias publicadas
   * 11. obtém a porcentagem de notícias publicadas
   */
  ngOnInit() {
    // obtém os autores
    this.autores.todos().subscribe(
      (autores: Array<any>) => {
        // obtém o total de autores
        this.total_autores = autores.length;
        // para cada autor...
        autores.forEach(autor => {
          // obtém as notícias
          this.noticias.todas(null, null, autor.id, null).subscribe(
            (noticias_do_autor: Array<any>) => {
              // adiciona um item no ranking, composto por (autor, quantidade)
              this.ranking_autores.push({ autor: autor, quantidade: noticias_do_autor.length });
            }
          );
        });
      }
    );
    // obtém as notícias
    this.noticias.todas().subscribe(
      (noticias: Array<any>) => {
        // obtém o total de notícias
        this.total_noticias = noticias.length;
        // obtém as notícias publicadas
        this.noticias.todas(null, null, null, true).subscribe(
          (publicadas: Array<any>) => {
            // obtém o total de notícias publicadas
            this.total_noticias_publicadas = publicadas.length;
            // obtém a porcentagem de notícias publicadas
            if (this.total_noticias > 0) {
              this.porcentagem_noticias_publicadas = this.total_noticias_publicadas / this.total_noticias * 100;
            } else {
              this.porcentagem_noticias_publicadas = 0;
            }
          }
        );
      }
    );
  }

}
