import {User} from '../models/user';
import * as fromResult from './results';
import * as fromUserDetails from './userDetails';

export interface State {
  result: number;
  user: User;
}

export const reducers = {
  result: fromResult.reducer,
  user: fromUserDetails.reducer,
};

export const getResultState = (state: State) => state.result;

export const getUserDetailsState = (state: State) => state.user;
