import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {


  jugador:string;
  ranking = new Map();
  puntuacion:number;
  activo:boolean;
  
  constructor() { 
    this.puntuacion=0;
    this.activo=true;
  }// constructor

  ngOnInit() {

  }// ngOnInit

  jugar(){
    this.ranking.set(this.jugador,this.puntuacion);
    console.log(this.ranking.entries());
    this.activo=false;
    let tiempo=setTimeout(()=> {
      console.trace('Comienza el juego');
      this.activo=true;
      this.ranking.set(this.jugador,this.puntuacion);
      this.jugador='';
      this.puntuacion=0;            
    },10000);
    
  }

  puntuar(){
    
    console.trace('contarClicks');
    this.puntuacion++;
  }// contarClicks termina

  
}