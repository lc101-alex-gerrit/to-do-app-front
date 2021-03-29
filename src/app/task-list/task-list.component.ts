import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../core/data.service';
import { Task } from "../task/task.interface";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  onClick(task: Task): void {
    this.router.navigate(['/task', task.id]);
  }

}
