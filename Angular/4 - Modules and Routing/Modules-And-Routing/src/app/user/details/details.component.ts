import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    console.log(this.activatedRoute.snapshot.data, this.activatedRoute.snapshot.params);
    this.activatedRoute.params.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
