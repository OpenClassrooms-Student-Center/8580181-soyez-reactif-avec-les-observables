import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'create-an-observable', loadComponent: () => import('./chapters/create-an-observable/home.component').then(m => m.HomeComponent) },
  { path: 'basic-operators', loadComponent: () => import('./chapters/basic-operators/home.component').then(m => m.HomeComponent) },
  { path: 'higher-order-operators', loadComponent: () => import('./chapters/higher-order-operators/home.component').then(m => m.HomeComponent) },
  { path: 'unsubscribe-strategies', loadComponent: () => import('./chapters/unsubscribe-strategies/home.component').then(m => m.HomeComponent) },
];
