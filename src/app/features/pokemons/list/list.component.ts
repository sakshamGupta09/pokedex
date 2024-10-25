import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { IPokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { NoPokemonsFoundComponent } from '../no-pokemons-found/no-pokemons-found.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PokemonComponent, NoPokemonsFoundComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {
  protected pokemons = signal<IPokemon[]>([]);

  protected isLoading = signal(false);

  private pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this.fetchPokemons();
  }

  private fetchPokemons(): void {
    this.isLoading.set(true);

    this.pokemonService.getPokemons().subscribe({
      next: (response) => {
        if (response && Array.isArray(response.results)) {
          this.pokemons.set(response.results);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }
}
