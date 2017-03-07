import { Component } from '@angular/core';

import { UserService } from './services/user.service';

import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  constructor(private userService: UserService) { }
}
