import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-digital-ekyc',
  standalone: true,
  imports: [RouterLink, RouterOutlet, DropdownModule, TableModule],
  templateUrl: './digital-ekyc.component.html',
  styleUrl: './digital-ekyc.component.css'
})
export class DigitalEkycComponent {

}
