import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericComponent } from './generic-components.component';
import { VeganDetailsComponent } from '../generic-components-module/vegan-details/vegan-details.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
    {path: 'recipeDetails/:id/:title', component: VeganDetailsComponent},
    {path: 'shopDetails/:id/:title', component: VeganDetailsComponent},
    {path: 'restaurantDetails/:id/:title', component: VeganDetailsComponent},
];

  
@NgModule({
    declarations: [
        GenericComponent,
        VeganDetailsComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatButtonModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    exports: [
        GenericComponent,
    ],
  })
  
  export class GenericComponentsModule { }