import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibGVvbmk2IiwiYSI6ImNscGltcHlqcjAxN3MybXFvMXhyaTFvMWoifQ.DXL_D2ICY3Xk1ElIj2oARQ';
@Component({
  selector: 'app-full-screen-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.scss',
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento html no fue encontrado'

    const map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }


}
