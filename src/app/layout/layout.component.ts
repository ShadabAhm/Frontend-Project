import { Component, Renderer2, ViewChild } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../service/layout.service';
import { RightSidebarComponent } from "../right-sidebar/right-sidebar.component";
import { BottomSidebarComponent } from "../bottom-sidebar/bottom-sidebar.component";


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterOutlet, CommonModule, RightSidebarComponent, BottomSidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private layoutService: LayoutService, private router: Router) { }

  get containerClass() {
    return {
      'layout-overlay':this.layoutService.state.overlayMenuActive,
      'layout-static': !this.layoutService.state.overlayMenuActive,
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive,
      'layout-overlay-active':  this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
    };
  }

  get isSidebarClosed() {
    return this.layoutService.state.staticMenuDesktopInactive;
  }

  get rightSidebarVisible() { 
    return this.layoutService.state.rightSidebarVisible;
  }

  get bottomSidebarVisible() {
    return this.layoutService.state.bottomSidebarVisible;
  }
  

  sidebarVisible = false;
    
  toggleSidebar() {
    this.layoutService.onMenuToggle();
  }

  toggleRightSidebar() {
    this.layoutService.toggleRightSidebar();
  }
  toggleBottomSidebar() {
    this.layoutService.toggleBottomSidebar();
  } 

  shouldShowLayout(): boolean {
    return this.router.url !== '/login' && this.router.url !== '/register' && this.router.url !== '/ekyc' && this.router.url !== '/ekyc-result';
  }
}
