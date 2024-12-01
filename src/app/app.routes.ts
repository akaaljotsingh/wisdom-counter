import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/counter/counter.component').then((mod) => mod.CounterComponent),
  },
  {
    path: 'counter',
    loadComponent: () =>
      import('./pages/counter/counter.component').then((mod) => mod.CounterComponent),
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./pages/history/history.component').then((mod) => mod.HistoryComponent),
  },
];
