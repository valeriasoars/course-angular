import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";
import { Ticket } from "./ticket/ticket";
import { TicketModel } from './ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketModel[] = []

  onAdd(ticketData: {title: string, text: string}){
    const ticket: TicketModel = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString() ,
      status: 'open'
    }
    this.tickets.push(ticket)
  }
}
