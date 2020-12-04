import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from 'app/modules/popup/pop-up/pop-up.component';

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
        style: 'button-style',
        index: 0
      },
      {
        label: 'Recette',
        path: './recipe',
        subLabel: 'Ajouter une recette', 
        subPath: './add_recipe',
        subLabel2: 'Voir liste des recettes',
        subPath2: './see_recipes_list',
        style: 'button-style',
        index: 1
      },
      {
        label: 'Magasin',
        path: './shop',
        subLabel: 'Ajouter un magasin', 
        subPath: './add_shop',
        subLabel2: 'Voir liste des magasins',
        subPath2: './see_shops_list',
        style: 'button-style',
        index: 2
      },
      {
        label: 'Restaurant',
        path: './restaurant',
        subLabel: 'Ajouter un restaurant', 
        subPath: './add_restaurant',
        subLabel2: 'Voir liste des restaurants',
        subPath2: './see_restaurants_list',
        style: 'button-style',
        index: 3
      },
      {
        label: 'Connexion',
        path: '/login',
        style: 'connexion-button-style',
        index: 4
      },
    ];
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((res) =>{
       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    })
  }

  onAdd(){
    console.log('we opening this');  }


}
