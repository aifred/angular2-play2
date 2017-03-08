import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  registerUser(): Promise<String> {
    return Promise.resolve('test');
  }
}
