import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _nullErrors = [];

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
