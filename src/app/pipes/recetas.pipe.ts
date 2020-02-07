import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetasFiltro'
})
export class RecetasPipe implements PipeTransform {

  transform(datos: any, busqueda:string, gluten:boolean): any {
    console.trace('----------------- Pipe empieza');
    console.debug(datos);
    console.debug(busqueda);
    console.debug(gluten);
    console.trace('----------------- Pipe termina');

    let resultado = datos;


    if(gluten){
      resultado = resultado.filter(el=>el.isGlutenFree);
    }

    if(busqueda && '' !==busqueda.trim()){
      
      busqueda = busqueda.toLowerCase();

      resultado = resultado.filter( (el) => {
          const ingredientes = el.ingredientes.reduce( (c, p) => c + p , '');
          const encontrar = (el.nombre + el.cocinero + ingredientes ).toLowerCase();
          return encontrar.includes(busqueda);
      });
    }
    return resultado;

  }//transform

}//RecetasPipe
