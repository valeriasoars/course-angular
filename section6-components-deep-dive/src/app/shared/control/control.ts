import { AfterContentInit, afterEveryRender, afterNextRender, Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
   // Facilita estilizar elementos projetados com ng-content.
  //  <ng-content select="input, textarea""")/>>
  // Os elementos input ou textarea que aparecerão ali não pertencem tecnicamente ao template do seu componente Control; eles vêm de "fora" (do componente pai).

  host: {
      class: 'control',
      '(click)': 'onClick()'
  } // dizendo ao Angular para adicionar automaticamente atributos, classes ou eventos diretamente à "casca" (o elemento host) do componente no HTML.
})
export class Control implements AfterContentInit {

  label = input.required<string>()
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>


  constructor(){
    // Executa toda vez que o Angular renderiza o componente - Na primeira renderização e  Sempre que algo muda (estado, input, evento, etc.)
    afterEveryRender(() => { console.log('afterEveryRender')})

    // Executa apenas uma vez, na próxima renderização
    afterNextRender(() => {console.log('afterNextRender')})
  }


  ngAfterContentInit(){
    //..
  }

  onClick(){
    console.log('clicked')
    console.log(this.control)
  }
}
