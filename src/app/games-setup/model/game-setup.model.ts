import { Game } from "./game.model"

export interface GamesSetup
{
    readonly isFetching: boolean,
    readonly games: Game[]
}