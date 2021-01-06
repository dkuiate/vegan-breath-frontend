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
  myCurrentPosition: google.maps.LatLngLiteral = {lat: null, lng: null};
 // googleMapType = 'roadMap';

  constructor() { }

  ngOnInit(): void {
    //Current postion of the user
    this.currentPosition();
  }
  
  currentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      this.myCurrentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      console.log(this.myCurrentPosition)
    });
  }
}
