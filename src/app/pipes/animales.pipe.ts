import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda:string): any {
    console.trace('----------------- Pipe empieza');
    console.debug(datos);
    console.debug(busqueda);
    console.trace('----------------- Pipe termina');

    busqueda=busqueda.toUpperCase();
    let resultado=datos.filter((el)=>{
      const nombre = el.Nombre.toUpperCase();
      return nombre.includes(busqueda);
    });
    return resultado;
  }//transform

}//AnimalesPipe
