import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-vegan-cards',
  templateUrl: './vegan-cards.component.html',
  styleUrls: ['./vegan-cards.component.css']
})
export class VeganCardsComponent implements OnInit {

@Input() veganInformations: string;

  constructor() { }

  ngOnInit(): void {

  }


}
