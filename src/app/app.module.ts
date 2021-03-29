import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from "./core/core.module";
import { TaskModule } from "./task/task.module";
import { TaskListModule } from "./task-list/task-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TaskModule,
    TaskListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
