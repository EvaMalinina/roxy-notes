import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from "./form/form.component";

const routes: Routes = [{
  path: '',
  component: TodoListComponent,
}, {
  path: '**',
  component: FormComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true },
    // {onSameUrlNavigation: 'reload'}
    )],
  exports: [RouterModule],
})

export class AppRoutingModule { }

