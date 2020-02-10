
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './componentes/prueba/prueba.component';
import { BotonComponent } from './componentes/boton/boton.component';

import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { SassComponent } from './paginas/sass/sass.component';
import { JuegoComponent } from './paginas/juego/juego.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';
import { HelloDirective } from './directivas/hello.directive';
import { SubrayarDirective } from './directivas/subrayar.directive';
import { AnimalesPipe } from './pipes/animales.pipe';
import { FooterComponent } from './componentes/footer/footer.component';
import { RecetarioComponent } from './paginas/recetario/recetario.component';
import { RecetasPipe } from './pipes/recetas.pipe';
import { Error404Component } from './paginas/error404/error404.component';
import { SaludarComponent } from './paginas/saludar/saludar.component';
import { TareasComponent } from './paginas/tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    BotonComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    PokemonRestComponent,
    SassComponent,
    JuegoComponent,
    DirectivasComponent,
    FiltrosComponent,
    HelloDirective,
    SubrayarDirective,
    AnimalesPipe,
    FooterComponent,
    RecetarioComponent,
    RecetasPipe,
    Error404Component,
    SaludarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Modulo para formularios
    HttpClientModule //Modulo para llamadas por HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
