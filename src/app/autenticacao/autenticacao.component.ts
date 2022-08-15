import { NgClass } from "@angular/common";
import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-autenticacao', 
    templateUrl: './autenticacao.component.html', 
    styleUrls: ['./autenticacao.component.css']
})

export class AutenticacaoComponent{

    email: string = "";
    senha: string = "";
    msn: string = ""; 
    user: string = "XPTO-21";
    password: string = "Trocar@123";
    tentativas: number = 3;

    public insereEmail(evento: Event){
        this.email = (<HTMLInputElement>evento.target).value;
    }

    public insereSenha(evento: Event){
        this.senha = (<HTMLInputElement>evento.target).value;
    }

    public login(){
        let isTelaValida: boolean = this.consistirTela();
        
        if ((this.email === this.user && this.senha === this.password) && isTelaValida && (this.tentativas > -1)){
            this.msn = "Logado!";

            } else if ((this.email !== this.user) && isTelaValida){
                this.msn = "Acesso negado, usuário incorreto!";
                this.tentativas--;

                } else if ((this.email === this.user && this.senha !== this.password) && isTelaValida){
                    this.msn = "Acesso negado, senha incorreta!";
                    this.tentativas--;
                }

        if (this.tentativas === 0){
            this.msn = "Usuário bloqueado!";
        }
    }

    public consistirTela(){
        
        if (this.email == "" || this.email == " ") {
    
            this.msn = "Favor preencher: Campo E-mail!";

            return false;
        }
        
        if (this.senha == "" || this.senha == " ") {
    
            this.msn = "Favor preencher: Campo Password!";
    
            return false;
        }    
        return true;    
    }

}