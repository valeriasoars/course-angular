import { Component, input, signal } from '@angular/core';
import { TicketModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
   data = input.required<TicketModel>()
   detailsVisible = signal(false)

   onToogleDatails(){
    //this.detailsVisible.set(!this.detailsVisible())
    this.detailsVisible.update((wasVisible) => !wasVisible)
   }
}
