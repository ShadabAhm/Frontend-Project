import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feature-plot',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './feature-plot.component.html',
  styleUrl: './feature-plot.component.css'
})
export class FeaturePlotComponent {

}
