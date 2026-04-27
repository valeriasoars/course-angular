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
  enteredTitle = ''
  enteredText = ''
  add = output<{title: string; text: string}>()

  ngOnInit(){
    console.log('oninit')
    console.log(this.form?.nativeElement)
  }

  ngAfterViewInit(){
    console.log('after view init')
    console.log(this.form?.nativeElement)
  }


  onSubmit(){
    console.log(this.enteredTitle)
    console.log(this.enteredText)

    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    //this.form?.nativeElement.reset()
    this.enteredTitle = ''
    this.enteredText = ''
    
    //const enteredTitle = titleElement.value
    // console.log('ENTERED TITLE: ' + enteredTitle)
    // console.dir(titleElement)
    // console.log('SUBMITTED')
  }
}
