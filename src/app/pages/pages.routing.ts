import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';


const pagesChild: Routes = [
  {
    path: 'producto',
    loadChildren: () =>
      import('./producto/producto.module').then(
        m => m.ProductoModule
      )
  },
  { path: '', redirectTo: '/producto', pathMatch: 'full' }
];


export const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: pagesChild
  }
];
