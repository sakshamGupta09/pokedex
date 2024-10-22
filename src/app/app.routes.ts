import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./features/pokemons/routes').then((r) => r.POKEMON_ROUTES),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemons',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./page-not-found/page-not-found.component').then(
        (p) => p.PageNotFoundComponent
      ),
  },
];
