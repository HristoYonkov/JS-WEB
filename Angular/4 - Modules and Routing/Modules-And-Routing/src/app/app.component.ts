import { Component } from '@angular/core';
import { Test } from './user/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Modules-And-Routing';

  constructor (private t: Test) { 
    console.log(this.t);
  }
}
