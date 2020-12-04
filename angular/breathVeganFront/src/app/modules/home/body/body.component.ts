import { Component, OnInit } from '@angular/core';
import { RecipeInterface } from '../../../models/recipe.interface';



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
      title: 'Recette 1',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 1,
      title: 'Recette 2',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 2,
      title: 'Recette 3',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
    {
      id: 3,
      title: 'Recette 4',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      description: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro'
    },
  ]



}
