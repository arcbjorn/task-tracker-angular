import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ITask } from 'src/app/types';
import { TASKS } from 'src/app/mock-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<ITask[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
