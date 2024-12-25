import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { APIClient, SpecializationDto, UserDto, UserNurseDto } from 'src/app/core/services/APIclient';

@Component({
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  selector: 'app-auth-signup-Nurse',
  templateUrl: './auth-signup-Nurse.component.html',
  styleUrls: ['./auth-signup-Nurse.component.scss']
})
export default class AuthSignupNurseComponent implements OnInit {

  specializations: SpecializationDto[] = [];
  userDto : UserDto ={}
  userNurseDto : UserNurseDto={}
   constructor( private apiClient: APIClient , private router: Router ){
      
  
    }
  ngOnInit(): void {
    this.apiClient.getAll8().subscribe(data=> {
      this.specializations = data.data;
    })
  }

    
  onSubmit() {
    this.userNurseDto.user = this.userDto;
    this.userNurseDto.user.userTypeId = 1;
    console.log(this.userNurseDto);
    
    this.apiClient.addNurseWithUser(this.userNurseDto).subscribe({
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
}
