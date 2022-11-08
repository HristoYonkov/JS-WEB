import { Component } from '@angular/core';

const myNumber = 1;

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

  myNumber = myNumber;

  ifLastName = false;

  constructor() { }

  showLastName(event: MouseEvent) {
    console.log(event);
    this.ifLastName = !this.ifLastName;
  }
}
