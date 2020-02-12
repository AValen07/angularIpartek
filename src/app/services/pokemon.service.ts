import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonService } from './Ipokemon.service.ts';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService{
  
  

  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
    
  }

  getPokemon(nombre:string): Observable<any>{    
    const url=`https://pokeapi.co/api/v2/pokemon/${nombre}`;
    console.trace('Ha llamado al metodo getPokemon '+url);   
    
    return this.http.get(url);
  }

  getHabilidades(nombreHabilidad :string): Observable<any>{
    const url=`https://pokeapi.co/api/v2/ability/${nombreHabilidad}`
    console.trace('Ha llamado al metodo getHabilidad '+url);
    return this.http.get(url);
  }
}
