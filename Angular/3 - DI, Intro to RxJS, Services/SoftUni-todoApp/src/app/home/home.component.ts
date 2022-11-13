import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    todos: Todo[] = [
        {
            title: 'Todo 1', isCompleted: false
        },
        {
            title: 'Todo 2', isCompleted: true
        },
        {
            title: 'Todo 3', isCompleted: false
        },
        {
            title: 'Todo 4', isCompleted: true
        },
    ];

    constructor() { }

    ngOnInit(): void {
    }
    
    markAsCompleted(): void {
        for (let todo of this.todos) {
          todo.isCompleted = true;
        }
    }

    handleStateChange(todo: Todo): void {
        todo.isCompleted = !todo.isCompleted
    }

}
