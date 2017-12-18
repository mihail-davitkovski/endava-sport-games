import { Component, Input } from "@angular/core";

import { Sport } from "../model/sport.model";

@Component({
  selector: 'sports-row',
  templateUrl: "templates/sports-row.component.html",
})
export class SportsRowComponent {
  @Input()
  sport: Sport;

  edit(sport: Sport)
  {
    
  }

  delete(sport: Sport)
  {
    
  }
}