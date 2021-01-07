import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {RestaurantsService} from '../../../apiServices/restaurants.service';
import {RecepeeService} from '../../../apiServices/recepee.service';
import {ShopsService} from '../../../apiServices/shops.service';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {CommonService} from '../../../apiServices/common.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  public restaurantList: Object;

  // tslint:disable-next-line:ban-types
  public recepeeList: Object;

  // tslint:disable-next-line:ban-types
  public shopList: Object;

  subscription: Subscription;
  recepeeSubscription: Subscription;
  shopSubcription: Subscription;
  searchControl = new FormControl();
  inputSearchValue: string;
  places: Subscription;
  data: Object = [];

  constructor(private restaurantService: RestaurantsService,
              private recepeeService: RecepeeService,
              private shopsService: ShopsService,
              private router: Router,
              private commonService: CommonService) { }

  ngOnInit(): void {

    let title = 'Angular Google Maps Example';
    let lat = 48.8534;
    let lng = 2.3488;
    let myCurrentPosition: google.maps.LatLngLiteral = {lat: null, lng: null};


    // restaurants
    this.subscription = this.restaurantService.getRestaurants().subscribe(
      (restaurantList) => {
        this.restaurantList = restaurantList;
      },
      (error) => {
        window.alert('Impossible dafficher les restaurants');
        console.log('errror on loading restaurants', error);
      },
      () => {
        console.log('restaurantsList', this.restaurantList);
      }
    );
    console.log('restaurants', this.restaurantList);

    // Recepee
    this.recepeeSubscription = this.recepeeService.getRecepee().subscribe(
      (recepeeList) => {
        this.recepeeList = recepeeList;
      },
      (error) => {
        window.alert('impossible dafficher les recettes');
        console.log(error);
      },
      () => {
        console.log('recepeeList', this.recepeeList);
      }
    );

    this.shopSubcription = this.shopsService.getShops().subscribe(
      (shopList) => {
        this.shopList = shopList;
      },
      (error) => {
        window.alert('impossible dafficher les boutiques');
        console.log(error);
      },
      () => {
        console.log('shopList', this.shopList);
      }
    );
  }

  dispayDistributionAround(): void {
     this.router.navigate(['/map']);
  }


  getText(event: any): void {
    this.inputSearchValue = event.target.value;
    this.commonService.setSearchText(this.inputSearchValue);
    this.router.navigate(['/map']);
  }


}
