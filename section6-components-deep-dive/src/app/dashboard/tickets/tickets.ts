import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: Ticket[] = []

  onAdd(ticketData: {title: string, text: string}){
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString() ,
      status: 'open'
    }
    this.tickets.push(ticket)
  }
}
