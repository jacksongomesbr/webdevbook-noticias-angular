import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  lista = null;

  constructor(private noticias: NoticiasService) { }

  ngOnInit() {
    this.lista = this.noticias.publicadas();
  }

}
