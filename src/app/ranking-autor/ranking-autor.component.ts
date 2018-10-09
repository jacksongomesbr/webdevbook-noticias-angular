import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';

@Component({
  selector: 'app-ranking-autor',
  templateUrl: './ranking-autor.component.html',
  styleUrls: ['./ranking-autor.component.css']
})
export class RankingAutorComponent implements OnInit {
  autorMaisPublicacoes = null
  constructor(private noticiaService: NoticiasService) { }

  ngOnInit() {
    this.autorMaisPublicacoes = this.noticiaService.rankingAutor();
  }

}
