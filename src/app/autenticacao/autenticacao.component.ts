import { NgClass } from "@angular/common";
import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
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
        userId: 'XPTO-21',
        password: 'Trocar@123',
        tipo: '',
    };

    constructor(private autenticacaoService: AutenticacaoService) { }

    ngOnInit(): void {
    }

    public insereEmail(evento: Event){
        this.usuario.userId = (<HTMLInputElement>evento.target).value;
    }

    public insereSenha(evento: Event){
        this.usuario.password = (<HTMLInputElement>evento.target).value;
    }

    public getUsuario(){
        let isTelaValida: boolean = this.consistirTela();
        this.mostraSpinner = true;

        this.autenticacaoService.getUsuario().subscribe((user) => (this.usuario = user[0]))

        setTimeout(() => {
            this.mostraSpinner = false;
            this.temMensagem = true;
          }, 2000)
        
        if ((this.usuario.userId === "XPTO-21" && this.usuario.password === "Trocar@123") && isTelaValida && (this.tentativas > -1)){
            this.msn = "Logado!";
            this.temErro = false;

            } else if ((this.usuario.userId !== "XPTO-21") && isTelaValida){
                this.msn = "Acesso negado, usuário incorreto!";
                this.tentativas--;
                this.temErro = true;

                } else if ((this.usuario.userId === "XPTO-21" && this.usuario.password !== "Trocar@123") && isTelaValida){
                    this.msn = "Acesso negado, senha incorreta!";
                    this.tentativas--;
                    this.temErro = true;
                }

        if (this.tentativas === 0){
            this.msn = "Usuário bloqueado!";
            this.usuarioBloqueado = true;
            this.temErro = true;
        }
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