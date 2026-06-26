import { Component, inject, signal } from '@angular/core';
import { TaskItem } from "./task-item/task-item";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItem],
  templateUrl: './tasks-list.html',
  styleUrl: './tasks-list.css',
})
export class TasksList {
  // Abordagem moderna (Angular 14+): Mesmo resultado da injeção via construtor, porém com menos código (boilerplate).
  private tasksServices = inject(TasksService)
  selectedFilter = signal<string>('all');
  tasks = this.tasksServices.allTasks;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
