import * as userDetails from '../actions/userDetails';
import {User} from '../models/user';

export function reducer(state: User, action: userDetails.DetailsChangeAction) {
  switch (action.type) {
    case userDetails.DETAILS_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
