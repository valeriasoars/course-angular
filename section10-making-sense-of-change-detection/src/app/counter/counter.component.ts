import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  // Sem NgZone => O Angular fica observando tudo o que acontece na aplicação =>
  // Essa verificação é chamada de detecção de mudanças (change detection.
  private zone = inject(NgZone)
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit(){
    setTimeout(() => {this.count.set(0)}, 4000)

    // Nem toda tarefa precisa que o Angular verifique a tela. => seria desperdício o Angular verificar toda a aplicação só por causa desse console.log
    // "Angular, pode ignorar esse código. Não precisa ficar observando ele."
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {console.log('timer expired!')}, 5000)
    })
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
