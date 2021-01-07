import { Injectable } from '@angular/core';


@Injectable()

export class FavoriteManagerService {
    favoritesArray: any[] = [];
    productDetailsUpdate: any[] = []
    constructor(){}

   
    setFavoriteStorage(detailsProductCurrent: any){
         const checkedFavoriteExist = this.favoritesArray.map((res) => res.title).indexOf(detailsProductCurrent.title);
         console.log(checkedFavoriteExist)
        if(checkedFavoriteExist === -1) {
            console.log(this.favoritesArray)
            this.favoritesArray.push(detailsProductCurrent);
        }
    }

    getFavoriteStorage(): any{
        return this.favoritesArray
    }
}