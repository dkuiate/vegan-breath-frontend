import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  private apiRoot = 'http://localhost:90/';

  constructor(
    private httpClient: HttpClient) { }

  getShops(){
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
