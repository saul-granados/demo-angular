import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
      path: '',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];



@NgModule({
  imports : [ RouterModule.forRoot( routes, { useHash: true } ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
