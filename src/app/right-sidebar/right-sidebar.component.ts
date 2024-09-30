import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [SidebarModule, CommonModule, ButtonModule, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent {
  @Input() visible: boolean = false;

  menuItems = [
    { icon: 'pi pi-home', label: 'Dashboard', routerLink: '/dashboard' },
    { icon: 'pi pi-chart-line', label: 'Prediction Model and Inputs', routerLink: '/prediction-model' },
    { icon: 'pi pi-users', label: 'Feature Plots and Comparisons', routerLink: '/feature-plot' },
    { icon: 'pi pi-calendar', label: 'Schedule', routerLink: '/schedule' },
    { icon: 'pi pi-file', label: 'Transaction', routerLink: '/transaction' },
    { icon: 'pi pi-envelope', label: 'Message', routerLink: '/message' }
  ];

  otherItems = [
    { icon: 'pi pi-question-circle', label: 'Help', routerLink: '/help' },
    { icon: 'pi pi-cog', label: 'Setting', routerLink: '/settings' }
  ];
}
