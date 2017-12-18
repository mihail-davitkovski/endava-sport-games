import { Action } from '@ngrx/store';

import { SportsActionType } from "./model/action.types";
import { ActionWithPayload } from "../../app/redux/action-with-payload.model";

import { Sport } from  "./model/sport.model";
import { Sports } from './model/sports.model';

const defaultState: Sports = {
    isFetching: false,
    sports: []
}

export const sportsReducer = (state: Sports = defaultState, action: ActionWithPayload<Sport[]>) => {
    switch (action.type) {
        case SportsActionType.REQUEST_SPORTS_STARTED.toString():
            return {...state, isFetching: true };
        case SportsActionType.RECEIVE_SPORTS_FINSIHED.toString():
            return {...state, isFetching: false, sports: action.payload };
        default:
            return state;
    }
}