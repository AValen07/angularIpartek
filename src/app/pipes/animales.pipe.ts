import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  transform(datos: any, busqueda:string, tipo: string): any {
    console.trace('----------------- Pipe empieza');
    console.debug(datos);
    console.debug(busqueda);
    console.trace('----------------- Pipe termina');

    if(busqueda && '' !==busqueda.trim()){
      busqueda=busqueda.toUpperCase();
      let resultado=datos.filter((el)=>{
      const nombre = el.Nombre.toUpperCase();
      return nombre.includes(busqueda);
      });      

      // filtrar por tipo
      if ( tipo && tipo !== 'TODOS' ) { 

        return resultado.filter( (el) => el.Tipo === tipo);

      } else {
        return resultado;
      }

    } else{
      if ( tipo && tipo !== 'TODOS' ) {
        return datos.filter( (el) => el.Tipo === tipo);
      }else{
        return datos;
      }
    }
  }//transform

}//AnimalesPipe
