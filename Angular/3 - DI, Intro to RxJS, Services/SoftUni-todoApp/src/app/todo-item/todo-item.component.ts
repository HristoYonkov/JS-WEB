import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface Todo {
    title: string;
    isCompleted: boolean;
}

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

    @Input() todo!: Todo;
    @Output() completeStateChange: EventEmitter<Todo> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    handleCompletion(changedTodo: Todo): void {
        this.completeStateChange.emit(changedTodo)
    }
}
