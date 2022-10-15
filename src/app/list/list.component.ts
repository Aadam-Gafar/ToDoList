import { Component, OnInit } from '@angular/core';
import { Task } from 'src/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentTasks: Task[] = []; // An array of Task objects

  addTask(nameIn: string, notesIn: string) { // Appends a new Task object to the array
    this.currentTasks.push(new Task(nameIn, notesIn));
  }

  delTask() { // Removes the last element of the array
    this.currentTasks.pop()
  }

}
