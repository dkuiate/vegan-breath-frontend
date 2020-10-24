import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericComponent } from './generic-components.component';

@NgModule({
    declarations: [
        GenericComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule
    ],
    providers: [],
    exports: [
        GenericComponent,
    ],
  })
  export class GenericComponentsModule { }