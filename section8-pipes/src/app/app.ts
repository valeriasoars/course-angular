import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort-pipe';

@Component({
  selector: 'app-root',
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './app.html',
})
export class App {
    currentDate = new Date();
    currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  // Evite usar um pipe para ordenar listas grandes, pois a ordenação pode ser executada repetidamente. 
  // Nesses casos, é melhor ordenar os dados no componente e não no template.
  //Assim a ordenação acontece apenas quando necessário, e não toda vez que o Angular verifica mudanças na tela.
  constructor(){
    this.historicTemperatures.sort((a,b) =>  a > b ? 1 : -1 )
  }

  onReset(index: number) {
    this.historicTemperatures[index] = 18;
    // const newTemps = [...this.historicTemperatures]
    // newTemps[index] = 18
    // this.historicTemperatures = newTemps
  }
}
