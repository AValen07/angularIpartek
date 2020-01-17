import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  // declarar variables. nombre: tipo
  numero: number;

  constructor() {

    // inicializan las variables
    this.numero=0;
   }

  ngOnInit() {
  }

}
