import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopServiceService } from './apiServices/shop-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {RegistrationModule} from './modules/registration/registration.module'; 
import {HomeModule} from './modules/home/home.module';
import {ShopModule} from './modules/shop/shop.module';
import { BrowserComponent } from '../shared/browser/browser.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {FormControlService} from './apiServices/form-control.service'; 
import { AgmCoreModule } from '@agm/core';
import { from } from 'rxjs';
import { AuthGuard, AuthInterceptor, AuthService } from './apiServices/auth.service';
import { ApimapComponent } from './apimap/apimap.component';
@NgModule({
  declarations: [
    AppComponent,
    BrowserComponent,
    ApimapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RegistrationModule,
    HomeModule,
    ShopModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAABqwkqj04XsQ01mQ2X7m-GYDmjtoPLqk'
    })
  ],
  providers: [
    ShopServiceService,
    AuthService,
    AuthGuard,
    FormControlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
