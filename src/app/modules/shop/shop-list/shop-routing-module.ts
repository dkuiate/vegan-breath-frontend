import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopModule } from '../shop.module';
import { ShopListComponent } from './shop-list.component';

export const registrationRoutes: Routes = [
    {
      path: 'shop',
      component: ShopListComponent
    },
  ];
  
  @NgModule({
    imports: [ShopModule,RouterModule.forChild(registrationRoutes)],
    exports: [],
    providers:[]
  })
  
  export class ShopRoutingModule { }