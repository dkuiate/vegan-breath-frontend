import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './apiServices/auth.service';
import { LogInComponent } from './modules/registration/log-in/log-in.component';
import { SignupComponent } from './modules/registration/signup/signup.component';
import { ShopListComponent } from './modules/shop/shop-list/shop-list.component';
import { ApimapComponent } from './apimap/apimap.component';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  {
    path: 'login',
    component: LogInComponent
    /*loadChildren: () => import('./modules/registration/registration.module').then(
      m => m.RegistrationModule 
    )*/
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'shop-list',
    component: ShopListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'map',
    component: ApimapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AgmCoreModule],
  providers:[]
})

export class AppRoutingModule { }
