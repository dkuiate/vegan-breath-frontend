import { Component, OnInit } from '@angular/core';
import { VeganProductListService } from '../../../service/vegan-product-list.service';
import { RecipeInterface } from '../../../models/recipe.interface';
import { ShopInterface } from '../../../models/shop.interface';
import { RestaurantInterface } from '../../../models/restaurant.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  recipeListResult: Array<RecipeInterface>;
  restaurantListResult: Array<RestaurantInterface>;
  shopListResult: Array<ShopInterface>;

  constructor(private veganProductListService: VeganProductListService) { }

  ngOnInit(): void {
    this.recipeListResult = this.veganProductListService.getRecipeList();
    this.restaurantListResult = this.veganProductListService.getRestaurantList();
    this.shopListResult = this.veganProductListService.getShopList();
  }

  

}
