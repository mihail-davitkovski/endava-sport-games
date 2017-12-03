import { Action } from '@ngrx/store';

import { GamesActionType } from "./model/action.types";
import { ActionWithPayload } from "../../app/redux/action-with-payload.model";

import { Game } from  "./model/game.model";
import { GamesSetup } from './model/game-setup.model';

const defaultState: GamesSetup = {
    isFetching: false,
    games: []
}

export const gamesReducer = (state: GamesSetup = defaultState, action: ActionWithPayload<Game[]>) => {
    switch (action.type) {
        case GamesActionType.REQUEST_GAMES_STARTED.toString():
            return {...state, isFetching: true };
        case GamesActionType.RECEIVE_GAMES_FINSIHED.toString():
            return {...state, isFetching: false, games: action.payload };
        default:
            return state;
    }
}