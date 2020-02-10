import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {


  tareas: Array<Tarea>;
  tituloNuevo:string;
  eliminado: Tarea;
  constructor(private servicioTarea:TareasService) { 
    console.trace('TareasComponent constructor');
    this.tareas=[];// inicializar el array
    this.tituloNuevo='';
  }// constructor

  ngOnInit() {
    console.trace('TareasComponent ngOnInit');

    this.cargarTareas();    
  }// ngOnInit

  editarEstado(tarea:Tarea){
    console.debug('click %o', tarea);
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe(()=> this.cargarTareas());
  }//editarEstado

  /**
   * Llama al servicio para cargar todas las tareas
   */
  private cargarTareas():void{
    // llamar al service para obtener tareas
    this.servicioTarea.listar().subscribe(datos=>{
      console.debug('Esto se ejecuta de forma asincrona');
      this.tareas=datos;
    });
  }

  eliminarTarea(id:number){
    
    this.servicioTarea.detalle(id).subscribe(dato=>this.eliminado=dato);
    console.trace('eliminarTarea %o', this.eliminado);
    if(confirm('Estas seguro?')){
      console.trace('Elminacion confirmada');
      alert(`Se ha eliminado la tarea "${this.eliminado.titulo}" con el id "${this.eliminado.id}"`);
      this.servicioTarea.eliminar(id).subscribe(()=>this.cargarTareas());
      
    }else{
      console.trace('Elminacion cancelada');
    }    
  }

  nuevaTarea(){
    console.debug('click nuevaTarea %s', this.tituloNuevo);
    let tNueva=new Tarea();
    tNueva.titulo=this.tituloNuevo;

    console.debug(tNueva);

    if(this.tituloNuevo.length>1&&this.tituloNuevo.trim()!=''){
      this.servicioTarea.crear(tNueva).subscribe(()=>{
        this.tituloNuevo='';
        this.cargarTareas();
      });
    }else{
      console.trace('esta vacio amigo');
      alert('oye que esta vacio, escribe algo');
    }
    
  }

}//TareasComponent
