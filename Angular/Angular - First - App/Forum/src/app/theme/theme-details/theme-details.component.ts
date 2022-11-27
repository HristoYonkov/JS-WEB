import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.data?.['theme']);
    
  }

  ngOnInit(): void {
  }

}
