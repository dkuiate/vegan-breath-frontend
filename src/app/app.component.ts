import { Component, OnInit } from '@angular/core';
import {ShopServiceService} from './apiServices/shop-service.service'
import { ShopItem} from './models/shop-item.interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(){ 
  }  
}
