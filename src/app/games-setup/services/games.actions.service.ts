import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { AppState } from '../../../app/redux/app.state';
import { createAction } from "../../../app/redux/action-creator"
import { Game } from '../model/game.model';
import { GamesActionType } from '../model/action.types';

@Injectable()
export class GamesActionsService {
  private gamesUrl = 'api/games';  // URL to web api

  constructor(private store: Store<AppState>, private http: HttpClient) { }

  getAllGames() {
    this.store.dispatch(createAction(GamesActionType.REQUEST_GAMES_STARTED.toString()));
    this.http
      .get<Game[]>(this.gamesUrl)
      .subscribe(games => {
        this.store.dispatch(createAction<Game[]>(GamesActionType.RECEIVE_GAMES_FINSIHED.toString(), games))
      })
  }
}