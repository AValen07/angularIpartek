import { Component, OnInit } from '@angular/core';
import { RECETAS } from 'src/app/recetas';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {


  recetas:Array<any>;
  recetaSeleccionada:any;
  constructor() { 
    console.trace('RecetarioComponent constructor');
    this.recetas=RECETAS;
    this.recetaSeleccionada=this.recetas[0];
  }//constructor

  ngOnInit() {
    console.trace('RecetarioComponent ngOnInit');
  }//ngOnInit

  seleccionarReceta(id:number){
    console.trace('RecetarioComponent seleccionarReceta');
    this.recetaSeleccionada=this.recetas.find(el=>el.id==id);
  }//seleccionarReceta

}//RecetarioComponent
