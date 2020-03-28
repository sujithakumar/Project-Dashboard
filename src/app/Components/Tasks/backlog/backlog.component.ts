import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { task } from '../../../Models/task';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

  Count: number;
  UsersCommented: any = [];
  Description: string = "";
  dueDate: any;
  colorCode: string;

  @Input() backlogTasks: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.backlogTasks && changes.backlogTasks.currentValue) {
      this.setData(changes.backlogTasks.currentValue);
    }
  }

  setData(inputData) {
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
