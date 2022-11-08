import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'component-app';

  changeTitle(newTitle: string) {
    this.title = newTitle;
    let inputEl = document.getElementById('myInput');
    console.log(inputEl);
    
  }
}
