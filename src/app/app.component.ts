import { Component } from '@angular/core';
// Componente principal que se carga al arrancar la app

/**
 * selector: Nombre de la etiqueta para inyectar componente en HTML
 * templateUrl: Vista del HTML
 * styleUrls: Estilos para la vista en formato scss
 */
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //variable
  title = 'angular App';
  subtitle = 'wellcome to hell'

}
