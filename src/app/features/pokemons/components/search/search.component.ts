import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

}
