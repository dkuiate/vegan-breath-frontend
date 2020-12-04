import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeganDetailsComponent } from '../app/modules/generic-components-module/vegan-details/vegan-details.component';

const routes: Routes = [
  {path: 'details/:id', component: VeganDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
