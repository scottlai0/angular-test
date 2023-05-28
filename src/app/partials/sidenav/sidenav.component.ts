import { Component, EventEmitter, HostListener, ViewChild, Output } from '@angular/core';
import { navbarData } from './nav-data';

export interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @ViewChild('sideNav') sideNav: any;

  @HostListener('document:click', ['$event']) outsideClickCloseSidenav(event: any): void {
    if (!this.sideNav.nativeElement.contains(event.target)) {
      this.closeSidenav();
    }
  };
  

  collapsed = false;
  screenWidth = 0;
  navData = navbarData

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

  closeSidenav(): void { 
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }
}
  