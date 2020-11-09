import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './apiServices/auth.service';
import { LogInComponent } from './modules/registration/log-in/log-in.component';
import { SignupComponent } from './modules/registration/signup/signup.component';
import { ShopListComponent } from './modules/shop/shop-list/shop-list.component';



const routes: Routes = [
  {
    path: 'registration',
    component: SignupComponent
    /*loadChildren: () => import('./modules/registration/registration.module').then(
      m => m.RegistrationModule 
    )*/
  
  },
  {
    path: 'lazyRegistration',
    loadChildren: './modules/registration/registration-routing.module#RegistrationRoutingModule'
  },
  {
    path: 'home',
    loadChildren: './modules/home/home-routing.module#HomeRoutingModule',
    canActivate: [AuthGuard]
  },
  {
    path:'recepee',
    loadChildren:'/modules/recepee/recepee-routing.module#RecepeeRoutingModule'
  },
  {
    path:'shop',
    loadChildren: '/modules/shop/shop-routing.module#ShopRoutingModule'
  },
  {
    path:'resteurants',
    loadChildren: './modules/restaurants/restaurants-routing.module#RestaurantsRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
