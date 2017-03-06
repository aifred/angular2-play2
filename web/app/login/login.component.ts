import { Component } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = new User('','');

  loginUser() {
    // TODO: call Service API to login user
  }
}