import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecepeeService {

  private apiRoot = 'http://localhost:90/';

  constructor(
    private httpClient: HttpClient) { }

  getRecepee(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/recettes'));
  }

  /*createRecepee(title: string, description: string, email: string, created_at: Date) {
    return this.httpClient.post(
      this.apiRoot.concat('addRestaurants/'),
      { title, description, email, created_at }
    );
  }*/
}
