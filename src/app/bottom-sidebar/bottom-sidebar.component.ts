import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './bottom-sidebar.component.html',
  styleUrl: './bottom-sidebar.component.css'
})
export class BottomSidebarComponent {
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
