import { enableProdMode, Component, OnInit } from "@angular/core";

import { SportsListComponent } from "./sports-list.component";
import { Sport } from "../model/sport.model";
import { SportsDataService } from "../services/sports.data.service";
import { SportsActionsService } from "../services/sports.actions.service";

@Component({
  templateUrl: "templates/sports-box.component.html",
  providers: [SportsDataService, SportsActionsService]
})
export class SportsBoxComponent implements OnInit{
  sports: Sport[];

  constructor(private sportsDataService: SportsDataService, 
    private sportsActionsService: SportsActionsService) {
      this.sportsDataService.getSports().subscribe(
        sports => {
          this.sports = sports
        }
      );
  }

  ngOnInit() {
    this.sportsActionsService.getAllSports();
  }

  sportWasAdded(sport: Sport): void {
    console.log('sport clicked: ', sport);
  }

  sportWasModified(sport: Sport): void {
    console.log('sport clicked: ', sport);
  }

  sportWasDeleted(sport: Sport): void {
    console.log('sport clicked: ', sport);
  }
}