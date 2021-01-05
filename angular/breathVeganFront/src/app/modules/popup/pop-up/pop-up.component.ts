import {Component, OnChanges, OnInit} from '@angular/core';
import {CommonService} from '../../../apiServices/common.service';
import {RestaurantModel} from '../../../models/restaurant.interface';
import {FormControlService} from '../../../apiServices/form-control.service';
import {RestaurantsService} from '../../../apiServices/restaurants.service';
import {ShopsService} from '../../../apiServices/shops.service';
import {ShopModel} from '../../../models/shop.interface';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit, OnChanges{


  content = this.commonService.getListData();
  element: any;
  elementCreation: RestaurantModel = new RestaurantModel();
  shopCreation: ShopModel;

  constructor(private commonService: CommonService,
              public formControlService: FormControlService,
              private restaurantService: RestaurantsService,
              private shopService: ShopsService) { }

  ngOnInit(): void {
    this.element = this.commonService.getElement();
  }

  ngOnChanges(): void{
    this.element = this.commonService.getElement();
  }

  createElement(): void{
    if (this.commonService.getElement() === 'un restaurant'){
      this.createRestaurant();
    }
    if (this.commonService.getElement() === 'un magasin'){
      this.createShop();
    }
  }

  createRestaurant(): void {
    this.elementCreation.picture = 'https://www.pornic.com/medias/images/prestataires/multitailles/6';
    this.elementCreation.email = 'dd@admin.com';
    if (this.formControlService.addingItemForm.valid) {
        // tslint:disable-next-line:max-line-length
        this.restaurantService.addRestaurant(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe(
          (data: RestaurantModel) => {
            this.elementCreation = data;
            window.alert('restaurant bien ajouté');
            console.log('createdData', data);
          },
          (error) => {
            window.alert('Ajout imposible du  magasin, essayer encore');
            console.log(error);
          }
        );
      }
  }

  createShop(): void {
    this.elementCreation.picture = 'https://www.pornic.com/medias/images/prestataires/multitailles/';
    this.elementCreation.email = 'ddd@admin.com';
    if (this.formControlService.addingItemForm.valid) {
      // tslint:disable-next-line:max-line-length
      this.shopService.addShops(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe(
        (data: ShopModel) => {
          this.shopCreation = data;
          window.alert('Magasin bien ajouté');
          console.log('createdData', data);
        },
        (error) => {
          window.alert('Ajout imposible du  magasin, essayer encore');
          console.log(error);
        }
      );
    }
  }


  discard(): void {
    console.log('close pop up');
  }

  addTitle(event: any): void{
    const value = event.target.value;
    if (value || ''){
      this.elementCreation.title = value;
    }
  }
  addDescription(event: any): void {
    const value = event.target.value;
    if (value || ''){
      this.elementCreation.description = value;
    }
    console.log('rightValue', value);
  }
}
