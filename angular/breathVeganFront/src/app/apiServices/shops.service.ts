import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  private apiRoot = 'https://vegan-breath.herokuapp.com/';

  constructor(
    private httpClient: HttpClient) { }

  getShops(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/lastShop'));
  }

  getAllShops(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/shops'));
  }

  getById(id: number){
    return this.httpClient.get(this.apiRoot.concat(`api/vegan/shopDetails/${id}`));
  }

  addShops(title: string, email: string, picture: string, description: string) {
    return this.httpClient.post(
      this.apiRoot.concat('api/vegan/addShop'),
      {title, email, picture, description }
    );
  }
}
