import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {


  jugador:string;
  ranking = new Map();
  puntuacion:number;
  activo:string;
  constructor() { 
    this.puntuacion=0;
    this.activo='disabled';
  }// constructor

  ngOnInit() {

  }// ngOnInit

  jugar(){
    this.ranking.set(this.jugador,this.puntuacion);
    console.log(this.ranking.entries());
    this.activo='';
  }

  puntuar(){
    
    console.trace('contarClicks');
    this.puntuacion++;
  }// contarClicks termina
}
