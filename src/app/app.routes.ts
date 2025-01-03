import { Routes } from '@angular/router';
import { AuthGuard } from './services/authGuard/auth.guard';
// import { AuthGuard } from './services/authGuard/auth.guard';

export const routes: Routes = [
  // { path: '**', redirectTo: '/login' }, // Wildcard route for unknown paths
  // { path: '', redirectTo: '/counter', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then((mod) => mod.LoginComponent),
  },
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./pages/counter/counter.component').then((mod) => mod.CounterComponent),
  //     // canActivate: [AuthGuard],
  // },
  {
    path: 'counter',
    loadComponent: () =>
      import('./pages/counter/counter.component').then((mod) => mod.CounterComponent),
      // canActivate: [AuthGuard],
  },
  {
    path: 'history',
    loadComponent: () =>
      import('./pages/history/history.component').then((mod) => mod.HistoryComponent),
      // canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./pages/account/account.component').then((mod) => mod.AccountComponent),
      canActivate: [AuthGuard]
  },
];
