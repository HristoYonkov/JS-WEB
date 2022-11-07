import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users = [
    {
      firstName: 'Pavel',
      lastName: 'Dimitrov'
    },
    {
      firstName: 'Hristo',
      lastName: 'Yonkov'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
