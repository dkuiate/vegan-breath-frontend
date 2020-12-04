
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopServiceService } from './apiServices/shop-service.service';
import { NavigationModule } from '../shared/browser/navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './modules/home/home.module';
import { BodyComponent } from './modules/home/body/body.component';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { VeganCardsComponent } from './modules/generic-components-module/vegan-cards/vegan-cards.component';
import { MatCardModule } from '@angular/material/card';
import { GenericComponentsModule } from '../app/modules/generic-components-module/generic-components.module';

//import { BodyComponent } from './body/body.component';
const routes: Routes = [
  // { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: '', component: BodyComponent },
 /* { path: 'first', component: Component1Component } ,
  { path: 'second', component: Component2Component },
  { path: 'third', component: Component3Component }*/
];

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    VeganCardsComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    HomeModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    GenericComponentsModule,
    NavigationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ShopServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
