import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { APIClient, UserDto } from 'src/app/core/services/APIclient';

@Component({
  selector: 'app-auth-signup',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export default class AuthSignupComponent {

  UserDto: UserDto = {}
  constructor( private apiClient: APIClient , private router: Router ){

  }
  addUser() {
    // Call APIClient to send signup data to the server
    this.apiClient.add9(this.UserDto).subscribe(
      (response) => {
        console.log('User created successfully:', response);
        alert('Signup successful!');
        // Navigate to login or dashboard after successful signup
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        console.error('Error during signup:', error);
        alert('Signup failed. Please try again.');
      }
    );
}
}
