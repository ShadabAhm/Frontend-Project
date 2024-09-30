import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userObj: any = {
    userName: '',
    password: ''
  };


  constructor(
    private router: Router
  ) { }

  onLogin() {
    const registeredUser = localStorage.getItem('userRegister');
  
    if (registeredUser) {
      const parsedUser = JSON.parse(registeredUser);
  
      if (this.userObj.userName === parsedUser.userName && this.userObj.password === parsedUser.password) {
        localStorage.setItem('userLogin', JSON.stringify(this.userObj));
        this.router.navigateByUrl('dashboard');
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('No registered user found. Please register first.');
    }
  }
}
