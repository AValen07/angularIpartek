import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {


  pokemon:Pokemon;
 
  constructor(private pokemonService:PokemonService) {
    console.trace('PokemonRestComponent constructor');
    this.pokemon=new Pokemon('pikachu');
    //this.pokemon.nombre='';
    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    // Llamadas a los servicios.
    
    // a un observable nos tenemos que suscribir
    // Cuando llamamos a un observable tenemos tres posibles metodos. 
    // Solo 1 es obligatorio.

    this.pokemonService.getPokemon(this.pokemon.nombre).subscribe(
      data=>{
        console.debug('peticion correcta data %o', data);
        this.pokemon.id=data.id;
        this.pokemon.imagen=data.sprites.front_shiny;  
      },
      error=>{
        console.warn('peticion ERRONEA data %o', error);
      },
      ()=>{
        console.warn('esto se hace siempre');
      }
    );
  }

}
