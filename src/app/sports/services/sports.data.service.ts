import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from "../../redux/app.state";
import { Sport } from '../model/sport.model';

@Injectable()
export class SportsDataService {

  constructor(private store: Store<AppState>) {}

  getSports(): Observable<Array<Sport>> {
    return this.store.select(appState => appState.sportsPage.sports)
  }
}

