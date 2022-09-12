import { Component } from '@angular/core';
import { AutenticacaoService } from './services/autenticacao.service';

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
  mostrarMenu: boolean = false;

  constructor(private autenticacaoService: AutenticacaoService){}

  ngOnInit(){
    this.autenticacaoService.mostrarMenuEmitter.subscribe((mostrar: boolean) => this.mostrarMenu = mostrar);
  }

  public logout(){
    this.autenticacaoService.logout();    
  }

}