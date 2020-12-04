import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vegan-details',
  templateUrl: './vegan-details.component.html',
  styleUrls: ['./vegan-details.component.css']
})

export class VeganDetailsComponent implements OnInit {
recipeDetail: any[] = [];
private location: Location

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.onDisplayDetails();
  }
  
  onDisplayDetails() {
    this.activatedRoute.paramMap
    .subscribe((res: any) =>{
      this.recipeDetail = [];
      //console.log(res.params)
       const currentDetailsResult = this.getCurrentDetails(res.params.id, res.params.title)
       this.recipeDetail.push(currentDetailsResult);
       //console.log(this.recipeDetail)
    });
  }


private  productDetails: any[] = [
 {
  productDetails:'recipeDetails',
  recipeDetails: [
    {
      id: 0,
      title: 'Recette 1',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    },
    {
      id: 1,
      title: 'Recette 2',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    },
    {
      id: 2,
      title: 'Recette 3',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    },
    {
      id: 3,
      title: 'Recette 4',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    }
  ]
},
{
  productDetails:'shopDetails',
  shopDetails: [
        {
          id: 0,
          title: 'Magasin 1',
          picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
        },
        {
          id: 1,
          title: 'Magasin 2',
          picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
        },
        {
          id: 2,
          title: 'Magasin 3',
          picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
        },
        {
          id: 3,
          title: 'Magasin 4',
          picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
        }
      ]
    }
  ]

  getCurrentDetails(id: string, title: string): Observable<any> {
  const newTitle = this.changeTitle(title);
  //console.log(newTitle)
    for(const product of this.productDetails) {
        const idNumber = this.convertStringToInt(id);
      if(newTitle === product.productDetails) {
        return product[newTitle].find(p => p.id == idNumber)
      }
    }
  }

  //convert the values of type string in int
  convertStringToInt(value: string) {
        if (value < '1') {
            return parseFloat(value);
        } else {
            return parseInt(value, 10);
        }
    }

    changeTitle(title: string){
      const lowerCaseTitle = title.toLowerCase();
      const removeLastChar = lowerCaseTitle.substring(0, lowerCaseTitle.length - 1)
      return this.englishTraduction(removeLastChar);
    }

    englishTraduction(title: string) {
      switch (title) {
        case 'recette':
          return 'recipeDetails';
        case 'magasin':
          return 'shopDetails';
        case 'restaurant':
          return 'restaurantDetails';
        default:
          return title;
      }
    }
}
