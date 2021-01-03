import { Component, OnInit } from '@angular/core';
import { FavoriteManagerService } from '../../../service/favorites-manager.services';
import { Router } from '@angular/router';
import { VeganDetailsService } from '../../../service/vegan-details.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})

export class FavoritesListComponent implements OnInit {
  favoritesListResult: any = this.veganDetailsService.favoritesListResult;
  
  constructor(private favoriteManagerService: FavoriteManagerService, private router: Router, private veganDetailsService: VeganDetailsService) {}

  ngOnInit(): void {
    this.displayFavoritesList()
  }

  displayFavoritesList() {
   this.veganDetailsService.favoritesListResult = this.favoriteManagerService.getFavoriteStorage()
   console.log(this.veganDetailsService.favoritesListResult)
  }

  deleteFavoris(currentProduct: any) {
    currentProduct.favoriteState = false;
   const indexPosition = this.veganDetailsService.favoritesListResult.map(res => res.id).indexOf(currentProduct.id)
   if(indexPosition !== -1){
     this.veganDetailsService.favoritesListResult.splice(indexPosition, 1);
     const newTitle = this.changeTitle(currentProduct.title).replace(/ /g, '');
     this.veganDetailsService.changeStateFavorite(newTitle, indexPosition, currentProduct.favoriteState);
   }
  }

  changeTitle(title: string){
    const lowerCaseTitle = title.toLowerCase();
    const removeLastChar = lowerCaseTitle.substring(0, lowerCaseTitle.length - 1)
    return removeLastChar + 'Details';
  }

  selectedVegan(favoriteList: any) {  
    this.router.navigate(['/details', favoriteList.id, favoriteList.title.replace(/ /g, '')])
  }
}
