import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AutenticacaoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '**', component: Error404Component },
  ];

  @NgModule({
    declarations: [], 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {}