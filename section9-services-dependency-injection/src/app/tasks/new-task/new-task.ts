import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  // com essa abordagem, temos uma instância para o componente NewTask e se depois quisermos utilizar esses dados em outro componente
  // é preciso criar uma instancai separada ( que não conteria as mesma informações) estaria trabalahndo com duas instanicas separadas
  private taskService: TasksService;

  constructor(){
    this.taskService = new TasksService()
  }
  
  onAddTask(title: string, description: string) {
    this.taskService.addTask({title, description})
    this.formEl()?.nativeElement.reset();
  }
}
