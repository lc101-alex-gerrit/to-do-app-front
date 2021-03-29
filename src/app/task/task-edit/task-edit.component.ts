import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/core/data.service';
import { Task } from '../task.interface';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: DataService) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataService.getTask(id).subscribe(task => {
      this.task = task;
    })
  }

  updateTask(task: Task): void {
    task.id = this.task.id;
    this.dataService.updateTask(task).subscribe(
      task => {
        console.log('Successfully updated task: ', task);
        this.router.navigate(this.route.snapshot.url.slice(0,-1).map(seg => seg.path));
      },
      error => {
        console.error(error);
      }
    );
  }

}
