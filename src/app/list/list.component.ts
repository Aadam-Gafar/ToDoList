import { Component, OnInit } from '@angular/core';
import { Task } from 'src/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newTaskName: string = ""; // Temporary store of new task name
  newTaskNotes: string = ""; // Temporary store of new task notes

  constructor() { }

  ngOnInit(): void {
  }

  currentTasks: Task[] = [
    new Task("Buy groceries", "We need milk and eggs."),
    new Task("Get a haircut", ""),
    new Task("Visit the library", "Bring your card.")
  ]; // An array of Task objects

  addTask() { // Using two-way binding, appends an entered task to the array
    this.currentTasks.push(new Task(this.newTaskName, this.newTaskNotes));
  }

  delTask(taskIndex: number) { // Removes ONE specified task from array
    this.currentTasks.splice(taskIndex, 1);
  }

}
