import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(todos: any[], searchInput: string, fieldName: string): any[] {

    if (!todos) { return []; }

    if (!searchInput) { return todos; }

    searchInput = searchInput.toLowerCase();

    return todos.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(searchInput);
      }
      return false;
    });
  }
}
