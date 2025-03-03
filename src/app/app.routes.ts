import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'create-an-observable', loadComponent: () => import('./chapitres/chapitre-2/home.component').then(m => m.HomeComponent) },
  { path: 'basic-operators', loadComponent: () => import('./chapitres/chapitre-3/home.component').then(m => m.HomeComponent) },
  { path: 'higher-order-operators', loadComponent: () => import('./chapitres/chapitre-5/home.component').then(m => m.HomeComponent) },
  { path: 'unsubscribe-strategies', loadComponent: () => import('./chapitres/chapitre-4/home.component').then(m => m.HomeComponent) },
];
