import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from 'src/app/core/data.service';
import { Task } from '../task.interface';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  private task: Task;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  addTask(task: Task): void {
    this.dataService.addTask(task).subscribe(
      task => {
        console.log('Successfully added task:', task);
        this.router.navigate([`/task/${task.id}`])
      }
    )
  }

}
