import { Component, OnInit } from '@angular/core';
import {ANIMALES} from '../../animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  tipos:Array<any>;
  coche:any;
  animales:Array<any>;
  tipo:string;
  constructor() { 
    console.trace('FiltrosComponent constructor');
    this.coche={
                  'nombre':'Audi r8',
                  'color':'blanco',
                  'isDiesel':false,
                  'precio':100000.00
                };
    this.tipo = 'TODOS';
    this.animales = ANIMALES;
    this.tipos=[...new Set(this.animales.map(el=>el.Tipo))];
  }//constructor

  ngOnInit() {
    console.trace('FiltrosComponent ngOnInit');
    
  }//ngOnInit

}//FiltrosComponent