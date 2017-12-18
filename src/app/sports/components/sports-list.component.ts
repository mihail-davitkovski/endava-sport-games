import { Input, Output, Component, EventEmitter } from "@angular/core";

import { Sport } from "../model/sport.model";
import { SportsRowComponent } from "./sports-row.component";

@Component({
  selector: 'sports-list',
  templateUrl: "templates/sports-list.component.html",
})
export class SportsListComponent {
  
  @Input()
  sports: Sport[];

  constructor() {
  }
}