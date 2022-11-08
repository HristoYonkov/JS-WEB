import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

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

    userIndex: null | number = null;

    get showIndex(): boolean {
        return (this.userIndex === null ? -1 : this.userIndex) >= 0;
    }

    constructor() { }

    showLastName(event: MouseEvent) {
        console.log(event);
        this.ifLastName = !this.ifLastName;
    }

    listItemClick(index: number) {
        if (this.userIndex === index) {
            this.userIndex = null;
            return;
        }
        this.userIndex = index
    }

    customEventHandler($event: ICustomEvent) {
        console.log($event);
        
    }

}
