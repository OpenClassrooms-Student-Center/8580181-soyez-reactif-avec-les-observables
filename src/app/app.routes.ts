import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'create-an-observable', loadComponent: () => import('./chapters/create-an-observable/home.component').then(m => m.HomeComponent) },
];
