import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { MaterialModule } from './../../components/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { ListadoProductoComponent } from './listado-producto/listado-producto.component';
import { RouterModule } from '@angular/router';
import { productoRoutes } from './producto.routing';



@NgModule({
  declarations: [
    ProductoComponent,
    FormularioProductoComponent,
    ListadoProductoComponent
  ],
  exports: [
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(productoRoutes)
  ]
})
export class ProductoModule { }
