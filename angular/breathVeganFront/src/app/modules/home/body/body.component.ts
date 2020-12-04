import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from '../../../models/recipe.interface';
import { ShopInterface } from '../../../models/shop.interface';
import { RestaurantInterface } from '../../../models/restaurant.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  
  public recipeList: RecipeInterface[] = [
    {
      id: 0,
      productName: 'recipe',
      title: 'Recette 1',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 1,
      productName: 'recipe',
      title: 'Recette 2',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 2,
      productName: 'recipe',
      title: 'Recette 3',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 3,
      productName: 'recipe',
      title: 'Recette 4',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    }, 
  ]

  

  public shopList: ShopInterface[] = [
    {
      id: 0,
      productName: 'shop',
      title: 'Magasin 1',
      picture:'assets/imgs/mockup-black-t-shirt-Front.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 1,
      productName: 'shop',
      title: 'Magasin 2',
      picture:'assets/imgs/mockup-black-t-shirt-Front.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 2,
      productName: 'shop',
      title: 'Magasin 3',
      picture:'assets/imgs/Huile_de_noix_de_coco.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 3,
      productName: 'shop',
      title: 'Magasin 4',
      picture:'assets/imgs/Huile_de_noix_de_coco.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
  ]

  public restaurantList: RestaurantInterface[] = [
    {
      id: 0,
      productName: 'restaurant',
      title: 'Restaurant 1',
      picture:'assets/imgs/restaurant-449952_1920.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 1,
      productName: 'restaurant',
      title: 'Restaurant 1',
      picture:'assets/imgs/restaurant-449952_1920.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 2,
      productName: 'restaurant',
      title: 'Restaurant 3',
      picture:'assets/imgs/restaurant-449952_1920.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 3,
      productName: 'restaurant',
      title: 'Restaurant 4',
      picture:'assets/imgs/restaurant-449952_1920.jpg',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
  ]

}
