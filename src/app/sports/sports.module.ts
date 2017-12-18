
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SportsBoxComponent } from "./components/sports-box.component";
import { SportsListComponent } from "./components/sports-list.component";
import { SportsRowComponent } from "./components/sports-row.component";
import { SportsModifyComponent } from "./components/sports-modify.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //The View classes are defined here: There are three,
  //Components, Directives and Pipes. They have private access by default
  // and can be used only in this module, otherwise they should be exported, i.e
  //to be placed in the exports array, exports:[]
  declarations: [
    SportsBoxComponent,
    SportsListComponent,
    SportsRowComponent,
    SportsModifyComponent
  ],
  exports:[SportsBoxComponent]
})
export class SportsModule { }