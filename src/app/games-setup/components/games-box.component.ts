import { enableProdMode, Component, OnInit } from "@angular/core";

import { GamesListComponent } from "./games-list.component";
import { Game } from "../model/game.model";
import { GamesDataService } from "../services/games.data.service";
import { GamesActionsService } from "../services/games.actions.service";

@Component({
  templateUrl: "templates/games-box.component.html",
  providers: [GamesDataService, GamesActionsService]
})
export class GamesBoxComponent implements OnInit{
  games: Game[];

  constructor(private gamesDataService: GamesDataService, 
    private gamesActionsService: GamesActionsService) {
      this.gamesDataService.getGames().subscribe(
        games => {
          this.games = games
        }
      );
  }

  ngOnInit() {
    this.gamesActionsService.getAllGames();
  }
  gameWasSelected(game: Game): void {
    console.log('Game clicked: ', game);
  }
}