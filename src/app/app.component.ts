import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angularProject';
  nome: string = 'Jean';
  titulo: string = "Titulo";
  valor: string = "";


public enviarProTitulo(){
  this.titulo = this.valor;
}

public limparCampo(){
  this.valor = "";
}

}