import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LngLat, Map, accessToken } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  public zoom = 10
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
    this.mapListener()
  }

  mapListener() {

    if (!this.map) throw 'Mapa no inicializado'
    this.map.on('zoom', () => {
      this.zoom = this.map!.getZoom()
    })

    this.map.on('zoom', () => {
      if (this.map!.getZoom() < 18) return
      this.map!.zoomTo(18)
    })

    this.map.on('move', () => {
      this.currentCenter = this.map!.getCenter()
      console.log(this.currentCenter)
    })
  }

  zoomIn() {
    this.map?.zoomIn()
  }

  zoomOut() {
    this.map?.zoomOut()
  }

  zoomChanged(value: string) {
    this.zoom = +value;
    this.map?.zoomTo(this.zoom)
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }
}
