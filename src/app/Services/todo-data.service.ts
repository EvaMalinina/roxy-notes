import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Models/todo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponse } from '../Models/res.model';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {
  baseUrl = 'https://todolist-89791.firebaseio.com/todos';

  constructor(
    private http: HttpClient
  ) { }

  listTodo() {
    return this.http
      .get<Todo[]>(`${this.baseUrl}.json`)
      .pipe(map(todos => {
        if (!todos) {
          return [];
        }
        return todos;
      }));
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post<IResponse>(`${this.baseUrl}/.json`, todo)
      .pipe(map(res => {
        return {...todo, id: res.name};
      }));
  }

  markTodo( todo: Todo ): Observable<Todo> {
    return this.http
      .patch<IResponse>(`${this.baseUrl}/${todo.id}.json`, todo)
      .pipe(map(res => {
        // return {...todo, id: res.name}
        return todo;
      }));
  }

  deleteTodo( todo: Todo ): Observable<void> {
    return this.http
      .delete<void>(`${this.baseUrl}/${todo.id}.json`);
  }
}
