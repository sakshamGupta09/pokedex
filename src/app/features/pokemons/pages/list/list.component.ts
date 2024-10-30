import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { IPokemon } from '../../models/pokemon';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { NoPokemonsFoundComponent } from '../../components/no-pokemons-found/no-pokemons-found.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [PokemonComponent, NoPokemonsFoundComponent, SearchComponent],
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
          this.pokemons.set(
            response.results.map((pokemon) => ({
              name: pokemon.name,
              id: this.getPokemonIdFromUrl(pokemon.url),
            }))
          );
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }

  private getPokemonIdFromUrl(url: string): number {
    let id = '';
    for (let i = url.length - 2; i >= 0; i--) {
      if (url[i] === '/') {
        break;
      }
      id = url[i] + id;
    }
    return +id;
  }
}
