import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios")
  }

}
