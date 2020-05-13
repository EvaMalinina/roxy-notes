 import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
 import {HttpClientModule} from "@angular/common/http";

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoDataService]
    });
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
