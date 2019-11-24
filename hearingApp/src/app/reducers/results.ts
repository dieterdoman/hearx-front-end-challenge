import * as results from '../actions/results';

export function reducer(state: number = 0, action: results.ResultChangeAction) {
  switch (action.type) {
    case results.RESULT_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
