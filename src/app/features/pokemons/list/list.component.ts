import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  protected pokemons = signal<IPokemon[]>([]);

  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.fetchPokemons();
  }

  private fetchPokemons(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (response) => {
        if (response && Array.isArray(response.results)) {
        }
      },
      error: () => {},
    });
  }
}
