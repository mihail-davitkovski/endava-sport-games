import { Component, Input } from "@angular/core";

import { Game } from "../model/game.model";

@Component({
  selector: 'games-row',
  templateUrl: "templates/games-row.component.html",
})
export class GamesRowComponent {
  @Input()
  game: Game;
}