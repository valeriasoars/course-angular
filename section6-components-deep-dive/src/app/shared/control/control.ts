import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None

  // Facilita estilizar elementos projetados com ng-content.
  //  <ng-content select="input, textarea""")/>>
  // Os elementos input ou textarea que aparecerão ali não pertencem tecnicamente ao template do seu componente Control; eles vêm de "fora" (do componente pai).
})
export class Control {
  label = input.required<string>();
}
