import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  numeroClicks:number;
  titulo:string;
  visible:boolean;
  constructor() { 
    this.numeroClicks=0;
    this.titulo='Hey que tal';
    this.visible = false;
    console.trace('constructor');
  }// constructor termina

  ngOnInit() {
    console.trace('ngOnInit');
  }// ngOnInit termina


  contarClicks(){
    console.trace('contarClicks');
    this.numeroClicks++;
  }// contarClicks termina

  decirAdios() {
    console.trace('decirAdios');

    this.visible = true;
  }//decirAdios
}// InicioComponent termina
