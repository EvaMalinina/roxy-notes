import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

import {TodoDataService} from '../Services/todo-data.service';
import {ITodo} from '../Models/todo.model';
import {Todo} from '../Models/todo';
import {AutoUnsubscribe} from 'ngx-auto-unsubscribe';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@AutoUnsubscribe()
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [TodoDataService,
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class FormComponent implements OnInit, OnDestroy {

  todo: ITodo = new Todo(  '', '', false, '');
  form: FormGroup;
  step = 0;
  list: FormGroup;

  @Output() public outToParent = new EventEmitter();

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(2)]),
      deadline: new FormControl(  '', Validators.required)
    });
  }

  addTodo() {
    const { title } = this.form.value;
    let { deadline } = this.form.value;
    deadline = moment(deadline).format('DD.MM.YYYY');
    const  todo: ITodo = {
      id: Date.now() + '',
      title,
      isDone: false,
      deadline
    };
    this.todoDataService.addTodo(todo).subscribe( todo => {
      this.outToParent.emit(todo);
      this.form.reset();
    }, err => console.error(err));
  }

  setStep(index: number) {
    this.step = index;
  }

  ngOnDestroy() {}
}
