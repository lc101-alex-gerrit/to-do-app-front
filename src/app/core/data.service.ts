import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { Task } from "../task/task.interface";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'http://localhost:8080';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTask(id: number): Observable<Task> {
    let endpoint = `${this.apiUrl}/task/${id}`;
    console.log(`GET ${endpoint}`);
    return this.http.get<Task>(endpoint)
      .pipe(
        catchError(this.handleError<Task>(null))
      );
  }

  addTask(task: Task): Observable<Task> {
    let endpoint = `${this.apiUrl}/task`;
    console.log(`POST ${endpoint}`)
    return this.http.post<Task>(endpoint, task, this.httpOptions)
      .pipe(
        catchError(this.handleError<Task>(null))
      )
  }

  private handleError<T>(passThroughValue?: T) {
    return (error): Observable<T> => {
      console.error(error);
      return of(passThroughValue as T)
    }
  }

}
