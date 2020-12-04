import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsListComponent} from '../restaurants/restaurants-list/restaurants-list.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

//
export class RestaurantsRoutingModule { }

