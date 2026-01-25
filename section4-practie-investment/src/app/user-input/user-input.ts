import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment.input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  @Output() calculate = new EventEmitter<InvestmentInput>()
  enteredInitialInvestment = '0'
  enteredAnnualInvestment = '0'
  enteredExpectedReturn = '5'
  enteredDuration = '10'


  onSubmit() {
    console.log('SUBMITTED')
    this.calculate.emit({
      initialInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    })
  }
}
