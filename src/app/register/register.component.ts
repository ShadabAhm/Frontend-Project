import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private router: Router
  ) { }

  userObj: any = {
    userName: '',
    email: '',
    password: '',
    confirmPassword:''
  };

  errorMessage='';


onRegister() {
  if (this.userObj.password !== this.userObj.confirmPassword) {
    this.errorMessage = 'Passwords do not match. Please try again.';
    return;
  }
  localStorage.setItem('userRegister', JSON.stringify(this.userObj));
  this.router.navigateByUrl('login')
}

}
