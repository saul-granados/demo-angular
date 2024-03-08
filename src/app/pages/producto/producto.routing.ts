import { Routes } from "@angular/router";
import { FormularioProductoComponent } from "./formulario-producto/formulario-producto.component";
import { ListadoProductoComponent } from "./listado-producto/listado-producto.component";
import { ProductoComponent } from "./producto.component";


const productoChild: Routes = [
  {
    path: 'formulario', component: FormularioProductoComponent
  },
  {
    path: 'listado', component: ListadoProductoComponent
  },
  { path: '', redirectTo: '/listado', pathMatch: 'full' }
];


export const productoRoutes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: productoChild
  }
];
