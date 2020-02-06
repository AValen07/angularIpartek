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

    if(busqueda && '' !==busqueda.trim()){

      busqueda=busqueda.toUpperCase();
      let resultado=datos.filter((el)=>{
      const nombre = el.nombre.toUpperCase();
      return nombre.includes(busqueda);
      });      
      if(gluten){
        return resultado.filter(el=>el.isGlutenFree===true);
      }else{
        return resultado
      }

    }else{
      if(gluten){
        return datos.filter(el=>el.isGlutenFree===true);
      }else{
        return datos;
      }
    }
  }//transform

}//RecetasPipe
