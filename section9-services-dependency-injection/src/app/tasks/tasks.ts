import { Component } from '@angular/core';
import { NewTask } from "./new-task/new-task";
import { TasksList } from "./tasks-list/tasks-list";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [NewTask, TasksList],
  templateUrl: './tasks.html',

// Fornecer o serviço no @Component cria uma instância local. 
// Ela será compartilhada apenas entre este componente e seus filhos (NewTask e TasksList).
// Se este componente for destruído, o serviço e seus dados também serão.
  // providers: [TasksService]
})
export class Tasks {}
