import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export interface ICustomEvent {
    test: number;
}

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})

export class ListItemComponent implements OnInit, OnDestroy {

    @Input() user!: { firstName: string, lastName: string }
    @Input() ifLastName!: boolean;
    @Input() staticString!: string;
    @Input() staticNumber!: Number;

    @Output('myCustomEvent') customEvent = new EventEmitter <ICustomEvent>();

    intervalId: number | undefined;

    constructor() {
        console.log(this.user);
        
    }

    ngOnDestroy(): void {
        clearInterval(this.intervalId);
    }
    
    ngOnInit() {
        this.intervalId = setInterval(() => {

        }, 5000) as unknown as number;
    }

    selectClick($event: MouseEvent) {
        $event.stopPropagation();
        this.customEvent.emit({ test: 123 })
    }
}