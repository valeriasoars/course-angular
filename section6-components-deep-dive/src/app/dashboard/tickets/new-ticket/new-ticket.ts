import { Component } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {

  onSubmit(titleElement: HTMLInputElement){
    const enteredTitle = titleElement.value
    console.log('ENTERED TITLE: ' + enteredTitle)



    // console.dir(titleElement)
    // console.log('SUBMITTED')
  }
}
