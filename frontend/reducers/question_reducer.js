import {
  RECEIVE_ALL_QUESTIONS,
  RECEIVE_QUESTION } from '../actions/question_actions';
import merge from 'lodash/merge';

const defaultState = {};

const QuestionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      return merge({}, state, {[action.question.id]: action.question});
    default:
      return state;
  }
};

export default QuestionReducer;
