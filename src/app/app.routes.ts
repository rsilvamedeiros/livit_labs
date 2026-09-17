import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'mercado', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'ordens', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: '**', redirectTo: '' },
];
