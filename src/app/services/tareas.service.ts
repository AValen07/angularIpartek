import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITareasService } from './ITareas.service';
import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService implements ITareasService{

  listar(): Observable<Tarea[]> {
    
    const url = 'http://localhost:3000/tareas';
    console.debug( `GET ${url}`);
    
    return this.http.get<Array<Tarea>>(url);
  }
  detalle(id: number): Observable<Tarea> {
    const url= `http://localhost:3000/tareas/${id}`;
    console.debug( `GET ${url}`);

    return this.http.get<Tarea>(url);
  }
  crear(tarea: Tarea): Observable<Tarea> {
    const url = 'http://localhost:3000/tareas';

    return this.http.post<Tarea>(url,tarea);
  }
  modificar(tarea: Tarea): Observable<Tarea> {
    const url= `http://localhost:3000/tareas/${tarea.id}`;
    console.debug('Put %s modificar %o', url, tarea);

    return this.http.put<Tarea>(url,tarea);
  }
  eliminar(id: number): Observable<Tarea> {
    const url= `http://localhost:3000/tareas/${id}`;
    console.trace('TareasService eliminar');
    return this.http.delete<Tarea>(url);

  }
  

  constructor(private http: HttpClient) { 
    console.trace('TareasService constructor');

  }//constructor

}//TareasService
