import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { POKEMON_IMAGE } from '@app/constants/pokemon-image-url';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  public pokemon = input.required<IPokemon>();

  readonly pokemonImage = POKEMON_IMAGE;
}
