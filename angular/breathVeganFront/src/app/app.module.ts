import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopServiceService } from './apiServices/shop-service.service';
import { BrowserComponent } from '../shared/browser/browser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


import { HomeModule } from './modules/home/home.module';
import { BodyComponent } from './modules/home/body/body.component';

//Material
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { VeganCardsComponent } from './modules/generic-components-module/vegan-cards/vegan-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
    BodyComponent,
    VeganCardsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    HomeModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [
    ShopServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
