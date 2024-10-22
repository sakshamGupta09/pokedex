import { Routes } from '@angular/router';

export const POKEMON_ROUTES: Routes = [
  {
    path: '',
    title: 'Pokemon List',
    loadComponent: () =>
      import('./list/list.component').then((m) => m.ListComponent),
  },
  {
    path: 'details/:id',
    title: 'Pokemon Details',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
];
