import { NgClass } from "@angular/common";
import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { Usuario } from "../interface/usuario";
import { AutenticacaoService } from "../services/autenticacao.service";

@Component({
    selector: 'app-autenticacao', 
    templateUrl: './autenticacao.component.html', 
    styleUrls: ['./autenticacao.component.css']
})

export class AutenticacaoComponent{

    msn: string = "";
    tentativas: number = 3;
    temMensagem: boolean = false;
    mostraSpinner: boolean = false;
    temErro: boolean = true;
    usuarioBloqueado: boolean = false;
    corMensagem = ['Mensagem-Erro', 'Mensagem-Sucess']
    usuario: Usuario = {
        userId: '',
        password: '',
        tipo: '',
    };

    usuarios: Usuario = {
        userId: '',
        password: '',
        tipo: '',
    };

    constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

    ngOnInit(): void {
    }

    public insereEmail(evento: Event){
        this.usuario.userId = (<HTMLInputElement>evento.target).value;
    }

    public insereSenha(evento: Event){
        this.usuario.password = (<HTMLInputElement>evento.target).value;
    }

    public login(){
        let isTelaValida: boolean = this.consistirTela();
        this.mostraSpinner = true;

        setTimeout(() => {
            this.mostraSpinner = false;
            this.temMensagem = true;
        
        if ((this.usuario.userId === this.usuarios.userId && this.usuario.password === this.usuarios.password) && isTelaValida && (this.tentativas > -1)){            
            this.autenticacaoService.login().subscribe((user) => (this.usuarios = user[0]))            
            localStorage['token'] = 'hxqWS8773D';
            this.router.navigate(['/']);
            this.msn = "Logado!";
            this.temErro = false;

            } else if ((this.usuario.userId !== this.usuarios.userId) && isTelaValida){
                this.msn = "Acesso negado, usuário incorreto!";
                this.tentativas--;
                this.temErro = true;

                } else if ((this.usuario.userId === this.usuarios.userId && this.usuario.password !== this.usuarios.password) && isTelaValida){
                    this.msn = "Acesso negado, senha incorreta!";
                    this.tentativas--;
                    this.temErro = true;
                }

        if (this.tentativas === 0){
            this.msn = "Usuário bloqueado!";
            this.usuarioBloqueado = true;
            this.temErro = true;
        }
        
        }, 2000)
    }

    public consistirTela(){
        
        if (this.usuario.userId == "" || this.usuario.userId == " ") {
    
            this.msn = "Favor preencher: Campo E-mail!";
            this.temMensagem = true;
            this.temErro = true;

            return false;
        }
        
        if (this.usuario.password == "" || this.usuario.password == " ") {
    
            this.msn = "Favor preencher: Campo Password!";
            this.temMensagem = true;
            this.temErro = true;
    
            return false;
        }    
        return true;    
    }    

}