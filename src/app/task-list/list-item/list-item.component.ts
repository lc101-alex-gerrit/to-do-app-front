import { Component, Input, OnInit } from '@angular/core';

import { Task } from 'src/app/task/task.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() task: Task

  constructor() { }

  ngOnInit() {
  }

}
