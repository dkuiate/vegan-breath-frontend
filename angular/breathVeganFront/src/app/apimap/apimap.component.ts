import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apimap',
  templateUrl: './apimap.component.html',
  styleUrls: ['./apimap.component.css']
})
export class ApimapComponent implements OnInit {
  title = 'Angular Google Maps Example';

  lat = 48.8534;
  lng = 2.3488;

  constructor() { }

  ngOnInit(): void {
  }

}
