import { Component, OnInit } from '@angular/core';
import {CommonService} from '../apiServices/common.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';


@Component({
  selector: 'app-apimap',
  templateUrl: './apimap.component.html',
  styleUrls: ['./apimap.component.css']
})
export class ApimapComponent implements OnInit {
  title = 'Angular Google Maps Example';
  lat = 48.8534;
  lng = 2.3488;
  myCurrentPosition: google.maps.LatLngLiteral = {lat: this.lat, lng: this.lng};
 
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.currentPosition();
    let map;
    let service;
    var paris = new google.maps.LatLng(this.lat, this.lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: paris,
      zoom: 15
    });
    let infowindow;
    if (isNotNullOrUndefined(this.commonService.getSearchText())){
      console.log('merde');
      let request = {
        location: paris,
        radius: '500',
        query: this.commonService.getSearchText(),
        type: 'vegan'
      };
      service = new google.maps.places.PlacesService(map);
      service.textSearch( request, callback);

      function callback(results, status): void{
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            const place = results[i];
            console.log('you got it', place);
          }
        }
      }



    }
  }

  currentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.myCurrentPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
