import { Routes } from "@angular/router";
import { MapsLayoutComponent } from "./layout/maps-layout/maps-layout.component";
import { FullScreenPageComponent } from "./pages/full-screen-page/full-screen-page.component";
import { ZoomRangePageComponent } from "./pages/full-screen-page/zoom-range-page/zoom-range-page.component";
import { MarkerPageComponent } from "./pages/full-screen-page/marker-page/marker-page.component";
import { PropertiesPageComponent } from "./pages/properties-page/properties-page.component";

export const MAPS_ROUTES: Routes = [
    {
        path: '',
        component: MapsLayoutComponent,
        children: [
            { path: 'fullscreen', component: FullScreenPageComponent },
            { path: 'zoom-range', component: ZoomRangePageComponent },
            { path: 'markers', component: MarkerPageComponent },
            { path: 'properties', component: PropertiesPageComponent },
            { path: '**', redirectTo: 'fullscreen' },
        ]

    }
]