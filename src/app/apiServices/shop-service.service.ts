import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ShopServiceService {

  private apiRoot = 'https://vegan-breath.herokuapp.com/';

  constructor(
    private httpClient: HttpClient) { }

    getShopItem(){
      return this.httpClient.get(this.apiRoot.concat('shop-item'));
    }

    createShopItem(name: string, description: string, town: string, zipCode: string) {
      return this.httpClient.post(
        this.apiRoot.concat('shopping-item/'),
        { name, description, town, zipCode }
      );
    }

    deleteShopItem(id: number) {
      return this.httpClient.delete(this.apiRoot.concat(`shopping-item/${id}/`));
    }
}
