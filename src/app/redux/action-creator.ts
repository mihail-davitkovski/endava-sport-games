import { Action } from '@ngrx/store';

import { ActionWithPayload } from "./action-with-payload.model";

export function createAction<T>(type: string, payload?:T): ActionWithPayload<T> {
  return { type, payload };
}