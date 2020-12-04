import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vegan-details',
  templateUrl: './vegan-details.component.html',
  styleUrls: ['./vegan-details.component.css']
})

export class VeganDetailsComponent implements OnInit {
recipeDetail: any[] = [];
private location: Location

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.onDisplayDetails();
  }
  
  onDisplayDetails() {
    this.activatedRoute.paramMap
    .subscribe((res: any) =>{
      this.recipeDetail = [];
       const currentDetailsResult = this.getCurrentDetails(res.params.id)
       this.recipeDetail.push(currentDetailsResult);
    });
  }


  private recipeDetails: any[] = [
    {
      id: 0,
      title: 'Recette 1',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    },
    {
      id: 1,
      title: 'Recette 2',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    },
    {
      id: 2,
      title: 'Recette 3',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    },
    {
      id: 3,
      title: 'Recette 4',
      picture:'assets/imgs/kisspng-vegetarian-cuisine-leaf-vegetable-side-dish-spicy-shredded-cabbage-5a995ae9122ee5.6192060815199997210745.png',
    }
  ]

  getCurrentDetails(id: string): Observable<any> {
   const idNumber = this.convertStringToInt(id);
   return this.recipeDetails.find(v => v.id === idNumber)
  }

      //convert the values of type string in int
      convertStringToInt(value: string) {

        if (value < '1') {
            return parseFloat(value);
        } else {
            return parseInt(value, 10);
        }
    }

    goBack(): void {
      this.location.back();
    }

}
