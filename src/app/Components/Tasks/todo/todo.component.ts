import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { task } from '../../../Models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  Count: number;
  UsersCommented: any = [];
  Description: string = "";
  dueDate: any;
  colorCode: string;

  @Input() todoTasks: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.todoTasks && changes.todoTasks.currentValue) {
      this.setData(changes.todoTasks.currentValue);
    }
  }



  setData(inputData) {
    debugger
    this.Count = inputData.Comments.length || 0;
    this.Description = inputData.Description || undefined;
    this.dueDate = inputData["Due-date"] || undefined;
    if (this.Count <= 2) {
      this.UsersCommented = inputData.Comments;
    } else if (this.Count > 2) {
      this.UsersCommented = inputData.Comments.slice(0, 2);
    }
    this.colorCode = inputData["color-code"];
  }

}
