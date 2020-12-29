import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vegan-details',
  templateUrl: './vegan-details.component.html',
  styleUrls: ['./vegan-details.component.scss']
})

export class VeganDetailsComponent implements OnInit {
  productDetailsArray: any[] = [];
private location: Location

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.onDisplayDetails();
  }
  
  onDisplayDetails() {
    this.activatedRoute.paramMap
    .subscribe((res: any) =>{
      this.productDetailsArray = [];
      //console.log(res.params)
       const currentDetailsResult = this.getCurrentDetails(res.params.id, res.params.title)
       this.productDetailsArray.push(currentDetailsResult);
       console.log(this.productDetailsArray)
       //console.log(this.recipeDetail)
    });
  }


private  productDetailsList: any[] = [
 {
  productDetails:'recipeDetails',
  recipeDetails: [
    {
      id: 0,
      title: 'Recette 1',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      subTitle1: 'Ingrédients',
      informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
      subTitle2: 'Réalisation de la recette',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 1,
      title: 'Recette 2',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      subTitle1: 'Ingrédients',
      informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
      subTitle2: 'Réalisation de la recette',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 2,
      title: 'Recette 3',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      subTitle1: 'Ingrédients',
      informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
      subTitle2: 'Réalisation de la recette',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 3,
      title: 'Recette 4',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
      subTitle1: 'Ingrédients',
      informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
      subTitle2: 'Réalisation de la recette',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  ]
},
{
  productDetails:'shopDetails',
  title1: 'Informations',
  title2: 'Description',
  shopDetails: [
        {
          id: 0,
          title: 'Magasin 1',
          picture:'assets/imgs/mockup-black-t-shirt-Front.jpg',
          subTitle1: 'Informations du lieux',
          informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
          subTitle2: 'Description du produit',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 1,
          title: 'Magasin 2',
          picture:'assets/imgs/mockup-black-t-shirt-Front.jpg',
          subTitle1: 'Informations du lieux',
          informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
          subTitle2: 'Description du produit',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 2,
          title: 'Magasin 3',
          picture:'assets/imgs/Huile_de_noix_de_coco.jpg',
          subTitle1: 'Informations du lieux',
          informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
          subTitle2: 'Description du produit',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 3,
          title: 'Magasin 4',
          picture:'assets/imgs/Huile_de_noix_de_coco.jpg',
          subTitle1: 'Informations du lieux',
          informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
          subTitle2: 'Description du produit',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    },
    {
      productDetails:'restaurantDetails',
      restaurantDetails: [
            {
              id: 0,
              title: 'Restaurant 1',
              picture:'assets/imgs/restaurant-449952_1920.jpg',
            },
            {
              id: 1,
              title: 'Restaurant 2',
              picture:'assets/imgs/restaurant-449952_1920.jpg',
            },
            {
              id: 2,
              title: 'Restaurant 3',
              picture:'assets/imgs/restaurant-449952_1920.jpg',
            },
            {
              id: 3,
              title: 'Restaurant 4',
              picture:'assets/imgs/restaurant-449952_1920.jpg',
            }
          ]
        }
  ]

  getCurrentDetails(id: string, title: string): Observable<any> {
  const newTitle = this.changeTitle(title);
  //console.log(newTitle)
    for(const product of this.productDetailsList) {
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
