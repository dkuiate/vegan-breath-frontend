import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecepeeService {

  private apiRoot = 'https://vegan-breath.herokuapp.com/';

  constructor(
    private httpClient: HttpClient) { }

  getRecepee(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/lastRecette'));
  }
  getAllRecepee(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/recettes'));
  }

  addRecepee(title: string, email: string, picture: string, description: string) {
    return this.httpClient.post(
      this.apiRoot.concat('api/vegan/addRecette'),
      {title, email, picture, description }
    );
  }
}
