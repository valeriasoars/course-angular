import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentResults } from "./investment-results/investment-results";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [App, Header, InvestmentResults],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [App]
})
export class AppModule {}