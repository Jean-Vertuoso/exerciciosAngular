import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostrarMenu:boolean = true;

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.autenticacaoService.mostrarMenuEmitter.subscribe((mostrar: boolean) => this.mostrarMenu = mostrar);
  }

}
