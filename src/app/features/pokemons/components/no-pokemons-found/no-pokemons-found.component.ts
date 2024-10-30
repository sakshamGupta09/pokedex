import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-pokemons-found',
  standalone: true,
  imports: [],
  templateUrl: './no-pokemons-found.component.html',
  styleUrl: './no-pokemons-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoPokemonsFoundComponent {

}
