import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { APIClient, LoginRequestDto } from 'src/app/core/services/APIclient';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-auth-signin',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export default class AuthSigninComponent {
 
  UserDto: LoginRequestDto = {}
  constructor( private apiClient: APIClient , private router: Router ){

  }
  login(){
    console.log("Clicked");
    console.log(this.UserDto);
    
    this.apiClient.login(this.UserDto).subscribe(data =>{
      this.router.navigate(['basic','badges'])
      
    }
  )
  }
}
