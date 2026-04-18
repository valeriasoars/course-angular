import { Component, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('form') form?: ElementRef<HTMLFormElement>

  onSubmit(title: string, ticketText: String){
    console.log(title)
    console.log(ticketText)
    this.form?.nativeElement.reset()
    
    //const enteredTitle = titleElement.value
    // console.log('ENTERED TITLE: ' + enteredTitle)
    // console.dir(titleElement)
    // console.log('SUBMITTED')
  }
}
