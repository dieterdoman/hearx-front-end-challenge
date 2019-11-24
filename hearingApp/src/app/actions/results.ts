import { Action } from '@ngrx/store';

export const RESULT_CHANGE = '[RESULT] Change';

export class ResultChangeAction implements Action {
  type = RESULT_CHANGE;

  constructor(public payload: number) {}
}
