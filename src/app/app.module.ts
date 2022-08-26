import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacaoComponent,
    HomeComponent,
    ContatoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
