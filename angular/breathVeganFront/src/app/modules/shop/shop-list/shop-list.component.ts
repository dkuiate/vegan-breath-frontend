import { Component, OnInit } from '@angular/core';
import { ShopServiceService } from 'src/app/apiServices/shop-service.service';
import { ShopItem } from 'src/app/models/shop-item.interface';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  items: ShopItem[];
  error: any;

  constructor(private shopService: ShopServiceService ) { }

  ngOnInit(){
    this.shopService.getShopItem().subscribe(
      (items: ShopItem[]) => this.items = items,
      (error:any) => this.error = error
      );
  }

  add(itemName: string, itemDescription: string, itemTown: string, itemZipCode: string) {
    this.shopService.createShopItem(itemName, itemDescription, itemTown, itemZipCode).subscribe(
      (item: ShopItem) => this.items.push(item)
    );
  }

  delete(id: number) {
    this.shopService.deleteShopItem(id).subscribe(
      (success: any) => this.items.splice(
        this.items.findIndex(item => item.id === id)
      )
    );
  }

}
