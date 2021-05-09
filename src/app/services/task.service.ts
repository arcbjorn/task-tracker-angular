import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITask } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private connection: HttpClient) {}

  getTasks(): Observable<ITask[]> {
    return this.connection.get<ITask[]>(this.apiUrl);
  }
}
