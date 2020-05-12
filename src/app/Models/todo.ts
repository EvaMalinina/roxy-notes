import {ITodo} from './todo.model';

export class Todo implements ITodo {
  public id?: string;
  public title?: string;
  public isDone?: boolean;
  public deadline?: string;

  constructor(id: string, title: string, isDone: boolean, deadline: string) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
    this.deadline = deadline;
  }
}
