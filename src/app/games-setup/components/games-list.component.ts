import { Input, Output, Component, EventEmitter } from "@angular/core";

import { Game } from "../model/game.model";
import { GamesRowComponent } from "./games-row.component";

@Component({
  selector: 'games-list',
  templateUrl: "templates/games-list.component.html",
})
export class GamesListComponent {
  
  @Input()
  games: Game[];

  @Output()
  onGameSelected: EventEmitter<Game>;

  currentGame: Game;

  constructor() {
    this.onGameSelected = new EventEmitter<Game>();
  }
  
  gameSelected(game: Game): void {
    this.currentGame = game;
    this.onGameSelected.emit(game);
  }
}