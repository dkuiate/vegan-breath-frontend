import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericComponent } from './generic-components.component';
import { VeganDetailsComponent } from '../generic-components-module/vegan-details/vegan-details.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesListComponent } from '../generic-components-module/favorites-list/favorites-list.component';
import { FavoriteManagerService } from '../../service/favorites-manager.services';
import { VeganDetailsService } from '../../service/vegan-details.service';

const routes: Routes = [
    {path: 'recipeDetails/:id/:title', component: VeganDetailsComponent},
    {path: 'shopDetails/:id/:title', component: VeganDetailsComponent},
    {path: 'restaurantDetails/:id/:title', component: VeganDetailsComponent},
];

  
@NgModule({
    declarations: [
        GenericComponent,
        VeganDetailsComponent,
        FavoritesListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forRoot(routes)
    ],
    providers: [FavoriteManagerService, VeganDetailsService],
    exports: [
        GenericComponent,
    ],
  })
  
  export class GenericComponentsModule { }