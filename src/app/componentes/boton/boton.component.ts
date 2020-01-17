import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  // declarar variables. nombre: tipo
  numero: number;
  sumar:boolean
  constructor() {

    // inicializan las variables
    this.numero=0;
    this.sumar=true;
   }

  ngOnInit() {
  }

  clickNumero =  function(){   

    if(this.numero<=10&&this.sumar){
      this.numero++;
      if(this.numero==10){
        this.sumar=false
      }
    } else{
      this.numero--;
      if(this.numero==0){
        this.sumar=true;
      }      
    }
  }
}
