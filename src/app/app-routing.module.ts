import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path: 'login',
    component: LoginComponent
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
