import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { task } from '../../../Models/task';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  Count: number;
  UsersCommented: any = [];
  Description: string = "";
  dueDate: any;
  colorCode: string;

  @Input() doneTasks: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.doneTasks && changes.doneTasks.currentValue) {
      this.setData(changes.doneTasks.currentValue);
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
