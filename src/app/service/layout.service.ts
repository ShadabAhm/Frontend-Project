import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  rightSidebarVisible: boolean;
  bottomSidebarVisible: boolean;

}

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    staticMenuMobileActive: false,
    rightSidebarVisible: false,
    bottomSidebarVisible: false
  };

  private overlayOpen = new Subject<any>();
  overlayOpen$ = this.overlayOpen.asObservable();

  onMenuToggle() {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    } else {
      if (this.isDesktop()) {
        this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive;
      } else {
        this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
        if (this.state.staticMenuMobileActive) {
          this.overlayOpen.next(null);
        }
      }

    }
  }

  toggleRightSidebar() {
    this.state.rightSidebarVisible = !this.state.rightSidebarVisible;
  }

  toggleBottomSidebar() {
    this.state.bottomSidebarVisible = !this.state.bottomSidebarVisible;
  }

  isOverlay() {
    return this.config().menuMode === 'overlay';
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

  private config() {
    return { menuMode: 'static' }; 
  }
}
