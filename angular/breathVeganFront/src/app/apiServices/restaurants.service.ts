import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestaurantModel} from '../models/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private apiRoot = 'http://localhost:90/';
  private resto: RestaurantModel;

  constructor(
    private httpClient: HttpClient) { }

  getRestaurants(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/lastRestaurants'));
  }

  getById(id: number){
    return this.httpClient.get(this.apiRoot.concat(`api/vegan/restaurantDetails/${id}`));
  }

  getAllRestaurants(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/restaurants'));
  }

  addRestaurant(title: string, email: string, picture: string, description: string) {
    return this.httpClient.post(
      this.apiRoot.concat('api/vegan/addRestaurants'),
      {title, email, picture, description }
    );
  }
}
