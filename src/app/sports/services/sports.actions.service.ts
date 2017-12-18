import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { AppState } from '../../../app/redux/app.state';
import { createAction } from "../../../app/redux/action-creator"
import { Sport } from '../model/sport.model';
import { SportsActionType } from '../model/action.types';

@Injectable()
export class SportsActionsService {
  private sportsUrl = 'api/sports';  // URL to web api

  constructor(private store: Store<AppState>, private http: HttpClient) { }

  getAllSports() {
    this.store.dispatch(createAction(SportsActionType.REQUEST_SPORTS_STARTED.toString()));
    this.http
      .get<Sport[]>(this.sportsUrl)
      .subscribe(sports => {
        this.store.dispatch(createAction<Sport[]>(SportsActionType.RECEIVE_SPORTS_FINSIHED.toString(), sports))
      })
  }
}