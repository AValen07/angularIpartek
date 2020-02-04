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
  mensaje:string;
  habilidad:string;
 
  constructor(private pokemonService:PokemonService) {
    console.trace('PokemonRestComponent constructor');
    this.pokemon=new Pokemon('pikachu');
    this.mensaje=undefined;
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
        this.mensaje='Pokemon cargado desde pokeapi';
        this.pokemon.id=data.id;
        this.pokemon.imagen=data.sprites.front_shiny;  
        const habilidadesNames = data.abilities.map( el => el.ability.name );
        habilidadesNames.forEach( habilidad => {
        this.pokemonService.getHabilidades(habilidad).subscribe(
          data=>{
            const habilidadCastellano = data.names.find( el => el.language.name === 'es' )
            this.pokemon.habilidades.push( habilidadCastellano.name );
          },
          error=>{

          },
          ()=>{

          }
        );
        });
      },
      error=>{
        console.warn('peticion ERRONEA data %o', error);
        this.mensaje='No existe pokemon X';
      },
      ()=>{
        console.warn('esto se hace siempre');
      }
    );
  }

}
