import { Component, input, output, signal } from '@angular/core';
import { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
   data = input.required<TicketModel>()
   close = output()
   detailsVisible = signal(false)

   onToogleDatails(){
    //this.detailsVisible.set(!this.detailsVisible())
    this.detailsVisible.update((wasVisible) => !wasVisible)
   }

   onMarkAsCompleted(){
    this.close.emit()
   }
}
