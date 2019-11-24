import { Action } from '@ngrx/store';
import {User} from '../models/user';

export const DETAILS_CHANGE = '[DETAILS] Change';

export class DetailsChangeAction implements Action {
  type = DETAILS_CHANGE;

  constructor(public payload: User) {}
}
