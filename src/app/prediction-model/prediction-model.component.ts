import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-prediction-model',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, ImageModule, ReactiveFormsModule],
  templateUrl: './prediction-model.component.html',
  styleUrl: './prediction-model.component.css'
})
export class PredictionModelComponent {
  predictionForm: FormGroup = new FormGroup({

    tenure: new FormControl("", Validators.required),
    monthlyCharges: new FormControl("", Validators.required),
    totalCharges: new FormControl("",Validators.required),
    onlineSecurity: new FormControl("", Validators.required),
    techSupport: new FormControl("", Validators.required),
    contract: new FormControl("", Validators.required), 
    paperlessBilling: new FormControl("", Validators.required),
    SelectPaymentMethod: new FormControl("", Validators.required)

  });
  
  formVal: any;

  onSave(){
    this.formVal = this.predictionForm.value
  }

}
