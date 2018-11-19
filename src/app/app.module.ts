import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LeitorDeNoticiaComponent } from './leitor-de-noticia/leitor-de-noticia.component';
import { ListaDeNoticiasComponent } from './lista-de-noticias/lista-de-noticias.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AutenticacaoGuard } from './autenticacao.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNoticiasComponent } from './admin-noticias/admin-noticias.component';
import { AdminCadastrarNoticiaComponent } from './admin-cadastrar-noticia/admin-cadastrar-noticia.component';
import { AdminCategoriaComponent } from './admin-categoria/admin-categoria.component';

const rotas: Routes = [
  { path: 'noticias/:id', component: LeitorDeNoticiaComponent, },
  { path: 'noticias', component: NoticiasComponent, },
  { path: 'sobre', component: SobreComponent, },
  { path: 'login', component: LoginComponent, },
  {
    path: 'admin', component: AdminHomeComponent,
      canActivate: [AutenticacaoGuard],
      canActivateChild: [AutenticacaoGuard],
      children: [
      { path: 'noticias/cadastrar', component: AdminCadastrarNoticiaComponent },
      { path: 'noticias', component: AdminNoticiasComponent },
      { path: '', component: AdminDashboardComponent },
      {path : 'categorias', component: AdminCategoriaComponent}
    ]
  },
  { path: '', component: NoticiasRecentesComponent, },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    PaginaNaoEncontradaComponent,
    LeitorDeNoticiaComponent,
    ListaDeNoticiasComponent,
    NoticiasComponent,
    SobreComponent,
    LoginComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminNoticiasComponent,
    AdminCadastrarNoticiaComponent,
    AdminCategoriaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
