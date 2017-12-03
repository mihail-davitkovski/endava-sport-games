import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from "../../redux/app.state";
import { Game } from '../model/game.model';

@Injectable()
export class GamesDataService {

  constructor(private store: Store<AppState>) {}

  getGames(): Observable<Array<Game>> {
    return this.store.select(appState => appState.gamesSetup.games)
  }
}

