import { Component } from '@angular/core';
import { SideNavToggle } from './partials/sidenav/sidenav.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tool-spread-dev';

  screenWidth= 0;
  isSideNavCollapsed = false;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}