import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  getPokemonDetails(id: number): Observable<any> {
    return this.httpClient.get(`${environment.pokedexBaseUrl}/pokemon/${id}`);
  }

  getPokemonList(): Observable<any> {
    console.log('****** get pokemon list');
    return this.httpClient.get(`${environment.pokedexBaseUrl}/pokemon`);
  }
}
