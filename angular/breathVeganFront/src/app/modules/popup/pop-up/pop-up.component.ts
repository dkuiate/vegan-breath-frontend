import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {


  content: any;

  constructor() { }

  ngOnInit(): void {

    this.content = 'recette';
  }

  

}
