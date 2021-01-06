import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public listData = [];
  public element: string;
  public itemDetail: object;

  constructor() { }

  getListData() {
    return this.listData;
  }

  setListData(listData: any){
    this.listData = listData;
  }

   getElement(): string{
    return this.element;
  }

  setElement(element: string): void{
    this.element = element;
  }

  getItemDetail(): any{
    return this.itemDetail;
  }

  setItemDetail(itemDetail: object): void{
    this.itemDetail = itemDetail;
  }

}
