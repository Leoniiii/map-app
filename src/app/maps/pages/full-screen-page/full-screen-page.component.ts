import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.scss',
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lng: number = -74.5;
  lat: number = 40;

  ngAfterViewInit(): void {
    if (!this.divMap) return;
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoibGVvbmk2IiwiYSI6ImNscGltcHlqcjAxN3MybXFvMXhyaTFvMWoifQ.DXL_D2ICY3Xk1ElIj2oARQ',
      container: this.divMap.nativeElement, // container ID
      style: this.style, // style URL
      zoom: 9, // starting zoom
      center: [this.lng, this.lat], // starting position [lng, lat]
    });
  }
}
