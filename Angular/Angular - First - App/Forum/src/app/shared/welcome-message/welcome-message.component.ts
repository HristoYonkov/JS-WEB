import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.scss']
})
export class WelcomeMessageComponent {

  @Input() isLoggedIn = false;

  constructor() { }

}
