import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users = [
    {
      firstName: 'Pavel',
      lastName: 'Dimitrov'
    },
    {
      firstName: 'Hristo',
      lastName: 'Yonkov'
    },
    {
      firstName: 'Cecka',
      lastName: 'Kolejkata'
    }
  ];

  ifLastName = false;

  constructor() { }

  showLastName() {
    this.ifLastName = !this.ifLastName;
  }

}
