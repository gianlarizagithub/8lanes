import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void 
  {
    this.setMapToCurrentPosition();
  }

  setMapToCurrentPosition() {
    (mapboxgl as typeof mapboxgl).accessToken =
      'pk.eyJ1IjoiZWRkaWVzb24xMyIsImEiOiJjanV3dGhnc2MwZzhzNDRwdmE0NTdzMTV6In0.gTi-HrGl2LtL4hnXjGL9dQ';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [121.718241, 17.625362], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
    const marker = new mapboxgl.Marker() // Initialize a new marker
      .setLngLat([121.718241, 17.625362]) // Marker [lng, lat] coordinates
      .addTo(map); // Add the marker to the map
    map.addControl(new mapboxgl.NavigationControl());
  
    
  }
}
