import { Component } from '@angular/core';

@Component({
  // transforma o componente em um Seletor de Atributo.
  // atributo incorporado
  // A principal razão é a semântica e o aproveitamento de recursos nativos do HTML.
  // Ao usar o seletor de atributo, você pode aplicar o componente diretamente em uma tag <button> nativa.
  selector: 'button[appButton], a[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {

}
