import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {


  frutas: any;
  aSoloNombres: Array<string>;
  frutasConDescuento: Array<string>;
  aSoloAmarillas: Array<string>;
  aColores: Array<string>;
  total: number;
  aPrecioAmarillas: number;
  totalDescuento: number;
  frutaVerde: string;
  constructor() {
    console.trace('ArraysComponent constructor');

    this.total=0;
    this.totalDescuento=0;
    this.aSoloNombres=[];
    this.frutasConDescuento=[];
    this.frutaVerde='';

    this.frutas=[
      {'nombre':'fresa', 'precio': 2.45, 'descuento': 0, 'colores':['roja']},
      {'nombre':'pera', 'precio': 3.50, 'descuento': 10, 'colores':['amarillo', 'verde']},
      {'nombre':'manzana', 'precio': 1.99, 'descuento': 50, 'colores':['amarillo', 'verde', 'roja']}
    ];
   }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');

    // this.frutas.forEach(fruta => this.total+=fruta.precio);



    /* modo extendido para poder depurar
    this.total = this.frutas.map(el=>{
        console.debug(el);
        return el.precio;
      }).reduce((previous, current)=>{
        console.debug(previous, current);
        return previous+current;
      },0);
    */

    //modo reducido
    this.total = this.frutas.map(el=> el.precio).reduce((c,p)=>c+p);
    this.totalDescuento = this.frutas.reduce((p,c)=>(p + c.precio - ( (c.precio*c.descuento)/100)),0);
    this.aSoloNombres = this.frutas.map(el=>el.nombre);
    this.frutasConDescuento = this.frutas.filter(el=>el.descuento>0).map(el=>el.nombre);
    // nombre de todas las frutas amarillas
    this.aSoloAmarillas = this.frutas.filter(el=>el.colores.find(el=>el=='amarillo')).map(el=>el.nombre);
    this.aPrecioAmarillas = this.frutas.filter(el=>el.colores.find(el=>el=='amarillo')).reduce((p,c)=>(p+c.precio),0);
    this.frutaVerde = this.frutas.find(el=>el.colores.find(el=>el=='verde')).nombre;
    this.aColores = this.frutas.reduce((p,c,i,a)=>p.concat(c.colores),[]).filter((item,index,array)=> array.indexOf(item)===index);
  }  
}