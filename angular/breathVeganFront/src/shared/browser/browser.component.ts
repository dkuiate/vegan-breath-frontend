import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})

export class BrowserComponent implements OnInit {

navLinks: any[];
activeLinkIndex = -1;

  constructor(private router: Router) { 

    this.navLinks = [
      {
        label: 'Accueil',
        path: './home',
        index: 0
      },
      {
        label: 'Recette',
        path: './recipe',
        subLabel: 'Ajouter une recette', 
        subPath: './add_recipe',
        subLabel2: 'Voir liste des recettes',
        subPath2: './see_recipes_list',
        index: 1
      },
      {
        label: 'Magasin',
        path: './shop',
        subLabel: 'Ajouter un magasin', 
        subPath: './add_shop',
        subLabel2: 'Voir liste des magasins',
        subPath2: './see_shops_list',
        index: 2
      },
      {
        label: 'Restaurant',
        path: './restaurant',
        subLabel: 'Ajouter un restaurant', 
        subPath: './add_restaurant',
        subLabel2: 'Voir liste des restaurants',
        subPath2: './see_restaurants_list',
        index: 3
      }
    ];
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((res) =>{
       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    })
  }


}
