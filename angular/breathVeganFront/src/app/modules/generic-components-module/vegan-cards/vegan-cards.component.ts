import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vegan-cards',
  templateUrl: './vegan-cards.component.html',
  styleUrls: ['./vegan-cards.component.scss']
})
export class VeganCardsComponent implements OnInit {

@Input() veganInformations: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  selectedVegan(vegan: any) {
    const test = vegan.title.replace(/ /g, '');
    console.log(test)
    
    this.router.navigate(['/details', vegan.id, vegan.title.replace(/ /g, '')])
  }


}
