import { Injectable } from '@angular/core';

@Injectable()

export class VeganDetailsService {
    favoritesListResult: any[] = [];

    private productDetailsList: any[] = [
        {
         productDetails: 'recetteDetails',
         recetteDetails: [
           {
             id: 0,
             title: 'Recette 1',
             picture: 'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
             subTitle1: 'Ingrédients',
             informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
             subTitle2: 'Réalisation de la recette',
             description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
             favoriteState: false
           },
           {
             id: 1,
             title: 'Recette 2',
             picture: 'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
             subTitle1: 'Ingrédients',
             informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
             subTitle2: 'Réalisation de la recette',
             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
             favoriteState: false
           },
           {
             id: 2,
             title: 'Recette 3',
             picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
             subTitle1: 'Ingrédients',
             informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
             subTitle2: 'Réalisation de la recette',
             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
             favoriteState: false
           },
           {
             id: 3,
             title: 'Recette 4',
             picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
             subTitle1: 'Ingrédients',
             informationsList: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
             subTitle2: 'Réalisation de la recette',
             description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
             favoriteState: false
           }
         ]
       },
       {
         productDetails:'magasinDetails',
         title1: 'Informations',
         title2: 'Description',
         magasinDetails: [
               {
                 id: 0,
                 title: 'Magasin 1',
                 picture:'assets/imgs/mockup-black-t-shirt-Front.jpg',
                 subTitle1: 'Informations du lieux',
                 informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                 subTitle2: 'Description du produit',
                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                 favoriteState: false
               },
               {
                 id: 1,
                 title: 'Magasin 2',
                 picture:'assets/imgs/mockup-black-t-shirt-Front.jpg',
                 subTitle1: 'Informations du lieux',
                 informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                 subTitle2: 'Description du produit',
                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                 favoriteState: false
               },
               {
                 id: 2,
                 title: 'Magasin 3',
                 picture:'assets/imgs/Huile_de_noix_de_coco.jpg',
                 subTitle1: 'Informations du lieux',
                 informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                 subTitle2: 'Description du produit',
                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                 favoriteState: false
               },
               {
                 id: 3,
                 title: 'Magasin 4',
                 picture:'assets/imgs/Huile_de_noix_de_coco.jpg',
                 subTitle1: 'Informations du lieux',
                 informationsList: ['Site web', 'Adresse', 'Numéro de téléphone', 'Email', 'Horraire'],
                 subTitle2: 'Description du produit',
                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                 favoriteState: false
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

         getProductDetailsList() {
             return this.productDetailsList;
         }

        changeStateFavorite(productCurrentTittle: string, index: number, favoriteState: any){
            for(const product of this.productDetailsList) {
                console.log(productCurrentTittle)
                if(productCurrentTittle == product.productDetails) {

                    product[productCurrentTittle].find(p =>{
                        if(p.id == index) {
                         p.favoriteState = favoriteState;
                         console.log('test');
                        }
                    } )
                }
            }
        }

        changeTitle(title: string){
          const lowerCaseTitle = title.toLowerCase();
          const removeLastChar = lowerCaseTitle.substring(0, lowerCaseTitle.length - 1)
          return removeLastChar + 'Details';
        }

        currentProduct(productCurrentTittle: string, index: number, favoriteState: any){
          for(const product of this.productDetailsList) {
              console.log(productCurrentTittle);
              if(productCurrentTittle === product.productDetails) {

                return product[productCurrentTittle].find(p =>p.id = index)
              }
          }
      }
}
