import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-ekyc-result',
  standalone: true,
  imports: [ImageModule, RouterLink],
  templateUrl: './ekyc-result.component.html',
  styleUrl: './ekyc-result.component.css'
})
export class EkycResultComponent {

}
