import { Sport } from "./sport.model"

export interface Sports
{
    readonly isFetching: boolean,
    readonly sports: Sport[]
}