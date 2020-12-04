import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {LogInComponent} from './log-in/log-in.component'
import {RegistrationModule} from './registration.module';
import {SignupComponent} from './signup/signup.component';

export const registrationRoutes: Routes = [
  {
    path: 'login',
    component: LogInComponent 
  },
  {
      path: 'signup',
      component: SignupComponent
  }
];

@NgModule({
  imports: [RegistrationModule,RouterModule.forChild(registrationRoutes)],
  exports: [],
  providers:[]
})

export class RegistrationRoutingModule { }