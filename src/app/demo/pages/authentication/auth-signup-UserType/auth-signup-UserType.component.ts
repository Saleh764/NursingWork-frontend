import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-auth-signup-UserType',
  templateUrl: './auth-signup-UserType.component.html',
  styleUrls: ['./auth-signup-UserType.component.scss']
})
export default class AuthSignupUserTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
