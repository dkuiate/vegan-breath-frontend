
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import {NavigationModule} from '../shared/browser/navigation.module';



import { BodyComponent } from './modules/home/body/body.component';

//Material
import { MatIconModule } from '@angular/material/icon';
import {FormControlService} from './apiServices/form-control.service';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { VeganCardsComponent } from './modules/generic-components-module/vegan-cards/vegan-cards.component';
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
    MatDialogModule,
    HomeModule,
    NavigationModule,
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
