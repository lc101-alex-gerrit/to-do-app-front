import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';


const routes: Routes = [
  { path: 'task/add', component: TaskAddComponent },
  { path: 'task/:id', component: TaskDetailsComponent },
  { path: 'task/:id/edit', component: TaskEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
