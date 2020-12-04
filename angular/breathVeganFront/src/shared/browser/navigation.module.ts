import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation.component'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BodyComponent } from '../../app/modules/home/body/body.component'



@NgModule({
    declarations: [
      NavigationComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule
    ],
    providers: [],
    exports: [
      NavigationComponent
    ],
  })
  
  export class NavigationModule { }