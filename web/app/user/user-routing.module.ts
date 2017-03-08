import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ]
})
export class UserRoutingModule { }
