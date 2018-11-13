import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-categoria',
  templateUrl: './admin-categoria.component.html',
  styleUrls: ['./admin-categoria.component.css']
})
export class AdminCategoriaComponent implements OnInit {
  categorias$ = null;
  constructor(private categorias_service: CategoriasService, private router: Router) { }

  ngOnInit() {
    this.categorias$ = this.categorias_service.todas();
    console.log(this.categorias$);
  }

  excluir(id) {
    this.categorias_service.excluir(id).subscribe(
      pessoa => {
        this.categorias$ = this.categorias_service.todas();
      },
      erro => {
        console.log(erro);
      }
    );
  }
}
