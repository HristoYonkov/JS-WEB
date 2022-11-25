import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  get isLoggedIn() {
    return this.authService.isLogegdIn
  }

  get user() {
    return this.authService.username;
  }

  constructor(private router: Router, private authService: AuthService) {

  }
  

}
