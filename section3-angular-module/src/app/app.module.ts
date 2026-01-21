import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";


import { AppComponent } from "./app.component";
import { HeaderComponet } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/sheared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [AppComponent, HeaderComponet, UserComponent], // aqui nao pode importar componentes standalones
    bootstrap: [AppComponent], // apenas no modulo raiz

    // importações como DatePipe... => são incluidas automaticamente pelo BrowserModule 
    // o browserModule deve ser importado apenas no modulo root
    imports: [BrowserModule, RouterOutlet, SharedModule, TasksModule] // aqui pode importar componentes standalones
})
export class AppModule{
    // declarando e usando os componentes que o appComponent usa
}