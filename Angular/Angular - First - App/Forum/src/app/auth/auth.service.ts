import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: IUser | null = null;

  get isLoggedIn() {
    return this.username !== null;
  }

  constructor() { }
}
