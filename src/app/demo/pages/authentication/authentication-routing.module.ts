import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'signin',
        loadComponent: () => import('./auth-signin/auth-signin.component')
      },
      {
        path: 'signup',
        loadComponent: () => import('./auth-signup/auth-signup.component')
      },
      {
        path: 'signup-UserType',
        loadComponent: () => import('./auth-signup-UserType/auth-signup-UserType.component')
      },
      {
        path: 'signup-Customer',
        loadComponent: () => import('./auth-signup-Customer/auth-signup-Customer.component')
      },
      {
        path: 'signup-Nurse',
        loadComponent: () => import('./auth-signup-Nurse/auth-signup-Nurse.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
