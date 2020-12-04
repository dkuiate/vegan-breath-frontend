import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

navLinks: any[];
activeLinkIndex = -1;
currentPath: string;

  constructor(private router: Router) { 

    this.navLinks = [
      {
        label: 'Accueil',
        path: '/',
        style: 'button-style',
        index: 0
      },
      {
        label: 'Recette',
        subLabel: 'Ajouter une recette', 
        subPath: '/add_recipe',
        subLabel2: 'Voir liste des recettes',
        subPath2: './see_recipes_list',
        style: 'button-style',
        index: 1
      },
      {
        label: 'Magasin',
        subLabel: 'Ajouter un magasin', 
        subPath: './add_shop',
        subLabel2: 'Voir liste des magasins',
        subPath2: './see_shops_list',
        style: 'button-style',
        index: 2
      },
      {
        label: 'Restaurant',
        subLabel: 'Ajouter un restaurant', 
        subPath: './add_restaurant',
        subLabel2: 'Voir liste des restaurants',
        subPath2: './see_restaurants_list',
        style: 'button-style',
        index: 3
      },
      {
        label: 'Connexion',
        path: './connexion',
        style: 'connexion-button-style',
        index: 4
      },
    ];
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((res) =>{
       //console.log(res)
       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => {
      //  console.log(this.activeLinkIndex)
        /* === '.' + this.router.url*/
        if(tab.path !== undefined && tab.path.charAt(0) === "."){
          return tab.path;
        } else {
          return {subLabelIndex: tab.subPath, subLabelIndex2: tab.subPath2}
        }
       }));
       //console.log(this.activeLinkIndex)
       //console.log(this.activeLinkIndex)
    })
  }


}
