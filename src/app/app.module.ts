import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LeitorDeNoticiaComponent } from './leitor-de-noticia/leitor-de-noticia.component';
import { ListaDeNoticiasComponent } from './lista-de-noticias/lista-de-noticias.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SobreComponent } from './sobre/sobre.component';

const rotas: Routes = [
  {path: 'admin/noticias', component: ListaDeNoticiasComponent, },
  {path: 'noticias/:id', component: LeitorDeNoticiaComponent, },
  {path: 'noticias', component: NoticiasComponent, },
  {path: 'sobre', component: SobreComponent, },
  {path: '', component: NoticiasRecentesComponent, },
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    PaginaNaoEncontradaComponent,
    LeitorDeNoticiaComponent,
    ListaDeNoticiasComponent,
    NoticiasComponent,
    SobreComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
