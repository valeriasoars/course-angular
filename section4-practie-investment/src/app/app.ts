import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentInput } from './investment.input.model';
import { InvestmentResults } from "./investment-results/investment-results";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('section4-practie-investment');



}
