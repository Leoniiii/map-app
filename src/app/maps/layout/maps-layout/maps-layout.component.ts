import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-maps-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideMenuComponent],
  templateUrl: './maps-layout.component.html',
  styleUrl: './maps-layout.component.scss'
})
export class MapsLayoutComponent {

}
