import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent {
    test: number;
}
@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

    @Input() user!: { firstName: string, lastName: string }
    @Input() ifLastName!: boolean;
    @Input() staticString!: string;
    @Input() staticNumber!: Number;

    @Output('myCustomEvent') customEvent = new EventEmitter <ICustomEvent>();

    constructor() { }

    selectClick($event: MouseEvent) {
        $event.stopPropagation();
        this.customEvent.emit({ test: 123 })
    }
}
