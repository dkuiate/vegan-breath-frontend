import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VeganDetailsService } from '../../../service/vegan-details.service';
import { FavoriteManagerService } from '../../../service/favorites-manager.services';

@Component({
  selector: 'app-vegan-cards',
  templateUrl: './vegan-cards.component.html',
  styleUrls: ['./vegan-cards.component.scss']
})
export class VeganCardsComponent implements OnInit {

@Input() veganInformations: string;
favoriteSetting: any;
favoriteState: boolean;
  constructor(private router: Router, private veganDetailsService: VeganDetailsService, private favoriteManagerService: FavoriteManagerService) {}

  ngOnInit(): void {
     
  }

  selectedVegan(vegan: any) {  
    this.router.navigate([`/details`, vegan.id, vegan.title.replace(/ /g, '')])
  }

  getSettingsFavoris() {
    this.veganDetailsService.favoritesListResult
  }

  changeFavoriteState(veganProductCurrent: any) {
    console.log(veganProductCurrent)
    veganProductCurrent.favoriteState = !veganProductCurrent.favoriteState;
    const newTitle = this.veganDetailsService.changeTitle(veganProductCurrent.title).replace(/ /g, '');
    this.veganDetailsService.changeStateFavorite(newTitle, veganProductCurrent.id, veganProductCurrent.favoriteState);
    this.favoriteManagerService.setFavoriteStorage({id: veganProductCurrent.id, title: veganProductCurrent.title, favoriteState: veganProductCurrent.favoriteState})
    if(!veganProductCurrent.favoriteState) {
      const newTitle = this.veganDetailsService.changeTitle(veganProductCurrent.title).replace(/ /g, '');
      this.veganDetailsService.changeStateFavorite(newTitle, veganProductCurrent.id, veganProductCurrent.favoriteState);
      this.veganDetailsService.favoritesListResult.splice(veganProductCurrent.id, 1);
    }
  }
}
