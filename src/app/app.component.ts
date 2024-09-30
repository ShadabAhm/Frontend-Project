import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageModule } from 'primeng/image';
import { SidebarModule } from 'primeng/sidebar';
import { LayoutService } from './service/layout.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    HeaderComponent,
    DashboardComponent,
    ImageModule,
    SidebarModule,
    SidebarComponent, 
    LayoutComponent],
    providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef, private messageService: MessageService){}

}
