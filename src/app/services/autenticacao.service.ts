import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs'; 
import { Usuario } from '../interface/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(): Observable<Usuario[]>{
    this.mostrarMenuEmitter.emit(true);
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios")
  }

  logout(): void{
    localStorage['token'] = '';    
    this.router.navigate(['/login']);
    this.mostrarMenuEmitter.emit(false);
  }

}
