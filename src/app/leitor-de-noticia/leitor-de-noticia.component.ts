import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Componente que apresenta a leitura de uma notícia.
 * 
 * O componente utiliza o serviço `NoticiasService` para obter a notícia
 * que deve ser apresentada.
 */
@Component({
  selector: 'app-leitor-de-noticia',
  templateUrl: './leitor-de-noticia.component.html',
  styleUrls: ['./leitor-de-noticia.component.css']
})
export class LeitorDeNoticiaComponent implements OnInit {
  /**
   * A notícia a ser apresentada
   */
  noticia = null;

  constructor(private noticias: NoticiasService,
    private route: ActivatedRoute,
    private router: Router) { }

  /**
   * Implementação do método `ngOnInit()`.
   * 
   * Esta implentação utiliza o objeto `route` (do tipo `Router`) para obter
   * o valor do parâmetro de URL e, assim, usar o serviço `NoticiasService`
   * para encontrar uma notícia pelo seu identificador.
   */
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticia = this.noticias.encontrar(Number.parseInt(id));
    if (!this.noticia) {
      this.router.navigate(['pagina-nao-encontrada']);
    }
  }

}
