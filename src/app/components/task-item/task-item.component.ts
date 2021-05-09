import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITask } from 'src/app/types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: ITask): void {
    this.onDeleteTask.emit(task);
  }
}
