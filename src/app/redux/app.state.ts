import { GamesSetup } from "../games-setup/model/game-setup.model";

export interface AppState {
    readonly gamesSetup: GamesSetup;
}