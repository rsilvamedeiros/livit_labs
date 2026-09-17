import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/institutional/institutional').then(m => m.Institutional) },
  { path: 'labs', loadComponent: () => import('./features/labs/labs').then(m => m.Labs) },
  { path: 'invest', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'invest/mercado', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'invest/ordens', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'flow', loadComponent: () => import('./features/flow/flow').then(m => m.Flow) },
  { path: '**', redirectTo: '' },
];
