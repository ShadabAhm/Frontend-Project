import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  router = inject(Router)
  signOff() {
  localStorage.removeItem('userLogin');
  this.router.navigateByUrl('login')
}

  sidebarVisible:any
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() rightSidebarToggle = new EventEmitter<void>();
  @Output() bottomSidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleRightSidebar(){
    this.rightSidebarToggle.emit();

  }

  toggleBottomSidebar() {
    this.bottomSidebarToggle.emit();
  }

}
