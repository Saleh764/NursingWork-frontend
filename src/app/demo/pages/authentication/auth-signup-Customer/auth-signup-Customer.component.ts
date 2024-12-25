import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { APIClient, CustomerDto, UserCustomerDto, UserDto } from 'src/app/core/services/APIclient';

@Component({
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  selector: 'app-auth-signup-Customer',
  templateUrl: './auth-signup-Customer.component.html',
  styleUrls: ['./auth-signup-Customer.component.scss']
})
export default class AuthSignupCustomerComponent implements OnInit  {

  userDto : UserDto ={}
  userCustomerDto : UserCustomerDto={}
  constructor( private apiClient: APIClient , private router: Router ){
    

  }
  ngOnInit(): void {
  }
  
  onSubmit() {
    this.userCustomerDto.user = this.userDto;
    this.userCustomerDto.user.userTypeId = 2;
    console.log(this.userCustomerDto);
    
    this.apiClient.addUserWithCustomer(this.userCustomerDto).subscribe({
      next: (response) => {
        alert('Registration successful!');
        this.router.navigate(['/success-page']);
      },
      error: (error) => {
        alert('An error occurred during registration.');
        console.error('Error:', error);
      }
    });
  }

    // this.apiClient.addUserWithCustomer(this.UserCustomerDto).subscribe(date => {
    //   // this.router.navigate(['basic','badges'])
    //   console.log('from sumbfjffjfjsfjfjfjfjfjfjfjfjfjf')
    // })
}
