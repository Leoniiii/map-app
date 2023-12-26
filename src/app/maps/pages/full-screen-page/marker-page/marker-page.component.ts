import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-marker-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.scss'
})
export class MarkerPageComponent implements AfterViewInit {

  public zoom = 13
  public map?: Map;
  public currentCenter: LngLat = new LngLat(-82.36201417068084, 23.129821342373006)

  @ViewChild('map') divMap?: ElementRef

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento html no fue encontrado'

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      accessToken: 'pk.eyJ1IjoibGVvbmk2IiwiYSI6ImNscGltcHlqcjAxN3MybXFvMXhyaTFvMWoifQ.DXL_D2ICY3Xk1ElIj2oARQ',
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Shumino'

    // const marker = new Marker({
    //   element: markerHtml
    // }).setLngLat(this.currentCenter).addTo(this.map)
  }
  createMarker() {

    if (!this.map) return
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter()

    this.addMarker(lngLat, color)
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return
    const marker = new Marker({
      color,
      draggable: true
    }).setLngLat(lngLat).addTo(this.map)
  }

}
