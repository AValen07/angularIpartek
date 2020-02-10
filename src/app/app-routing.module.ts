import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { SassComponent } from './paginas/sass/sass.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';


/**
 * Definir las rutas de la app de angular
 * El path debe coincidir con [routerLink] del componente navbar
 */
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'arrays', component: ArraysComponent},
  {path: 'pokemon-rest', component: PokemonRestComponent},
  {path: 'sass', component: SassComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'filtros', component: FiltrosComponent},
  {path: 'recetario', component: RecetarioComponent},
  {path: 'juego', component: JuegoComponent},
  // :pNombre los puntos sirven para indicar que es un parametro
  {path: 'saludar/:pNombre', component: SaludarComponent},
  {path: 'tareas', component: TareasComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
