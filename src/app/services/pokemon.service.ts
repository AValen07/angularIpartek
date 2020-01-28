import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');

  }

  getPokemon(nombre:string): Observable<any>{
    
    const url=`https://pokeapi.co/api/v2/pokemon/${nombre}`;
    console.trace('Ha llamado al metodo getPokemon '+url);
    return this.http.get(url);
  }
}
