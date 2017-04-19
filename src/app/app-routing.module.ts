import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './not-found';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: 'sign-up',
    loadChildren: './sign-up/sign-up.module#SignUpModule',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
