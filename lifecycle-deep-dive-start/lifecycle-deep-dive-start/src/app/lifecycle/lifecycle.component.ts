import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  // o Angular cria a instância da classe - > serve para Injeção de dependências (services) e Inicializações simples
  // não usar para Lógica pesada ou Acesso ao template ou @Input
  constructor() {
    console.log('CONSTRUCTOR');
  }

 // roda depois do Angular inicializar os dados do componente -> serve para: Buscar dados (API), Inicializar variáveis, Lógica inicial do componente
  // Executa uma vez após o Angular ter inicializado todas as entradas do componente.
 ngOnInit() {
    console.log('ngOnInit');
  }

   // usar semore  que um @Input() muda (inclusive na primeira vez) -> Detectar mudanças nos dados que vêm do componente pai
  // 	Executa sempre que as entradas do componente são alteradas.
   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // roda Toda vez que o Angular verifica mudanças (MUUUUITAS vezes) -> Pode impactar performance
  // Evite usar sem necessidade
  // 	Executado sempre que este componente é verificado em busca de alterações.
  ngDoCheck() {
    console.log('ngDoCheck');
  }


  // roda Depois que o conteúdo externo (ng-content) é inserido
  // serve para trabalhar com conteudo projetado
  //	Executa uma vez após o conteúdo do componente ter sido inicializado.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // Sempre que o conteúdo projetado é verificado -> Igual ao DoCheck, mas só para conteúdo externo
  // Executado sempre que o conteúdo deste componente for verificado em busca de alterações.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // Depois que a view (HTML) do componente é carregada
  //	Executa uma vez após a inicialização da visualização do componente .
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // Toda vez que a view é verificada
  // Roda MUITAS vezes → pode impactar performance
  // 	Executado sempre que a visualização do componente é verificada em busca de alterações.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Antes do componente ser destruído
  //Limpar memória
  // 	Executa uma vez antes que o componente seja destruído.

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
