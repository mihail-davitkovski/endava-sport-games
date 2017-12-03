
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GamesBoxComponent } from "./components/games-box.component";
import { GamesListComponent } from "./components/games-list.component";
import { GamesRowComponent } from "./components/games-row.component";

@NgModule({
  imports: [
    CommonModule
  ],
  //The View classes are defined here: There are three,
  //Components, Directives and Pipes. They have private access by default
  // and can be used only in this module, otherwise they should be exported, i.e
  //to be placed in the exports array, exports:[]
  declarations: [
    GamesBoxComponent,
    GamesListComponent,
    GamesRowComponent
  ],
  exports:[GamesBoxComponent]
})
export class GamesModule { }