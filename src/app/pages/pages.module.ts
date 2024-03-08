import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { pagesRoutes } from './pages.routing';
import { MaterialModule } from '../components/material.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(pagesRoutes)
  ]
})
export class PagesModule { }
