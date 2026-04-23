import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, ViewChild } from '@angular/core';
import { Button } from "../../../shared/button/button";
import { Control } from "../../../shared/control/control";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewInit {

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>
 // @Output() add = new EventEmitter()
  add = output<{title: string; text: string}>()

  ngOnInit(){
    console.log('oninit')
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(){
    console.log('after view init')
    console.log(this.form?.nativeElement)
  }


  onSubmit(title: string, ticketText: string){
    console.log(title)
    console.log(ticketText)

    this.add.emit({title: title, text: ticketText})
    this.form?.nativeElement.reset()
    
    //const enteredTitle = titleElement.value
    // console.log('ENTERED TITLE: ' + enteredTitle)
    // console.dir(titleElement)
    // console.log('SUBMITTED')
  }
}
