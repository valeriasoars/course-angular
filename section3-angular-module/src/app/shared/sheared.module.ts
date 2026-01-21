import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent], // Esse componente pode ser usado por outros módulos que importarem este módulo/ disponibiliza par ao modulo principal // disponibiliza para o modulo principal desde que o AppModule importe esse módulo.
    //  -> importa módulos, não componentes
})
export class SharedModule{

}