import { Component, OnInit } from '@angular/core';
import { Task } from 'src/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // Variables
  currentTasks: Task[] = [
    new Task("Buy groceries", "We need milk and eggs."), // Dummy task
    new Task("Get a haircut", ""), // Dummy task
    new Task("Visit the library", "Bring your card.") // Dummy task
  ];
  newTaskName: string = ""; // Temporary store of new task name
  newTaskNotes: string = ""; // Temporary store of new task notes

  constructor() { }

  ngOnInit(): void { // This method runs on initialisation (i.e. instantly)
    this.loadTask();
    this.emptyListCheck();
  }

  addTask() { // Using two-way binding, appends an entered task to the array
    this.currentTasks.push(new Task(this.newTaskName, this.newTaskNotes));
    this.saveTask();
    this.emptyListCheck();
  }

  delTask(taskIndex: number) { // Removes ONE specified task from array
    this.currentTasks.splice(taskIndex, 1);
    this.saveTask();
    this.emptyListCheck();
  }

  saveTask() { // Saves the 'currentTasks' array in its current state
    localStorage.setItem('currentTasks', JSON.stringify(this.currentTasks));
  }

  loadTask() { // Loads the 'currentTasks' array in its last saved state
    var savedData = localStorage.getItem('currentTasks');
    if (savedData != null) {
      this.currentTasks = JSON.parse(savedData);
    }
  }

  emptyListCheck() { // Activates a graphic when the 'currentTasks' is empty
    var emptyListMessage = document.getElementById("emptyListMessage");
    if (emptyListMessage) {
      if (this.currentTasks.length <= 0) {
        emptyListMessage.hidden = false;
      } else {
        emptyListMessage.hidden = true;
      }
    }
  }
}
