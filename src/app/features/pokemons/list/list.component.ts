import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IPokemon } from '../models/pokemon';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  protected pokemons = signal<IPokemon[]>([]);
}
