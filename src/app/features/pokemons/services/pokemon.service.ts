import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IGetPokemonResponse } from '../models/pokemon';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);

  public getPokemons() {
    return this.http.get<IGetPokemonResponse>(environment.API_URL);
  }
}
