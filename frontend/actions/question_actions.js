import * as QuestionApiUtil from '../util/question_api_util';

export const RECEIVE_ALL_QUESTIONS = RECEIVE_ALL_QUESTIONS;
export const RECEIVE_QUESTION = RECEIVE_QUESTION;

const receiveAllQuestions = (questions) => ({
  type: RECEIVE_ALL_QUESTIONS,
  questions
});

const receiveQuestion = (question) => ({
  type: RECEIVE_QUESTION,
  question
});

export const fetchAllQuestions = () => dispatch => (
  QuestionApiUtil.fetchAllQuestions()
    .then(resp => dispatch(receiveAllQuestions(resp)))
);

export const fetchQuestion = (id) => dispatch => (
  QuestionApiUtil.fetchQuestion(id)
    .then(resp => dispatch(receiveQuestion(resp)))
);
