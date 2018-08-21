import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { BarraDeNavegacaoComponent } from './barra-de-navegacao/barra-de-navegacao.component';
import { LeitorDeNoticiaComponent } from './leitor-de-noticia/leitor-de-noticia.component';
import { TodasAsNoticiasComponent } from './todas-as-noticias/todas-as-noticias.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';
import { EditarNoticiaComponent } from './editar-noticia/editar-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    BarraDeNavegacaoComponent,
    LeitorDeNoticiaComponent,
    TodasAsNoticiasComponent,
    CadastrarNoticiaComponent,
    EditarNoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
