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
  modoEdicion: boolean;

  // mensajes
  mensaje: string;
  showMensaje: boolean;

  constructor(private servicioTarea:TareasService) { 
    console.trace('TareasComponent constructor');
    this.tareas=[];// inicializar el array
    this.tituloNuevo='';
    this.mensaje='';
    this.showMensaje=false;

    this.modoEdicion = false;
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
      this.servicioTarea.eliminar(id).subscribe(()=>{
        this.mensaje=`Se ha eliminado la tarea "${this.eliminado.titulo}" con el id "${this.eliminado.id}"`;
        this.showMensaje=true;
        this.cargarTareas();
      });
      
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
        this.mensaje='tarea creada correctamente.';
        this.showMensaje=true;
      });
    }else{
      console.trace('esta vacio amigo');
      this.mensaje='oye que esta vacio, escribe algo.';
      this.showMensaje=true;
    }
    
  }

  cambiarTitulo(tarea: Tarea): void {
    console.debug('loose focus para cambiar titulo %o', tarea);
    this.servicioTarea.modificar(tarea).subscribe( () => this.cargarTareas() );
  }// cambiarTitulo


}//TareasComponent
