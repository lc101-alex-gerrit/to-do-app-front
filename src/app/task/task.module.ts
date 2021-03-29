import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { TaskRoutingModule } from './task-routing.module';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskAddComponent } from './task-add/task-add.component';


@NgModule({
  declarations: [TaskDetailsComponent, TaskFormComponent, TaskAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
