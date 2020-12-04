
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopServiceService } from './apiServices/shop-service.service';
<<<<<<< HEAD
=======
import { NavigationModule } from '../shared/browser/navigation.module';
>>>>>>> 91921608788a6d1ecb09b83c03d6a1eeda674a65
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

import { from } from 'rxjs';
import { AuthGuard, AuthInterceptor, AuthService } from './apiServices/auth.service';
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
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
