import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-recent-posts',
    templateUrl: './recent-posts.component.html',
    styleUrls: ['./recent-posts.component.scss']
})
export class RecentPostsComponent implements OnInit {

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.loadPosts(5).subscribe({
            next: (value) => {
                console.log(value);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }

}
