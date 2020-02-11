import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService{

  private isLogged:boolean;
  private usuario: Usuario;
  constructor() { 
    console.trace('UsuarioService constructor');
    this.isLogged=false;
    this.usuario=undefined;
  }// constructor

  estaLogueado(): boolean {
    console.trace('UsuarioService estaLogueado');
    return this.isLogged;
  }
  login(nombre: string, password: string) {
    console.trace('UsuarioService estaLogueado');
    const NOMBRE ='admin';
    const PASS ='admin';
    let usuarioBuscar:Usuario;

    if(NOMBRE===nombre && PASS===password){
      console.trace('usuario encontrado');
      usuarioBuscar=new Usuario();
      usuarioBuscar.nombre=nombre;
      usuarioBuscar.password=password;
      usuarioBuscar.id=99;
      this.isLogged=true;
    }else{
      console.trace('usuaro no encontrado');
      this.isLogged=false;
    }

    return usuarioBuscar;
  }//login

  cerrarSesion(idUsuario: number) {
    console.trace('UsuarioService cerrarSesion');
    this.isLogged=false;
  }

  
}// UsuarioService
