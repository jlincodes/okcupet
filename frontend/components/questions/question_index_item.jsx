import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndex from './question_index';

const QuestionIndexItem = (props) => {
  const question = props.question;
  const userProfile = props.userProfile;
  const petProfile = props.petProfile;
  const petResponse = props.petResponse;
  const userResponse = props.userResponse;

  if (userProfile && userResponse) {
    return (
      <li className="question-li">
        <h3 className="question">{question.user_question}</h3>
        <div className="question-response">{userResponse.body}</div>
      </li>
    );
  } if (userProfile && !userResponse) {
      return (
        <li className="question-li">
          <h3 className="question">{question.user_question}</h3>
          <div className="question-response">No response... yet.</div>
        </li>
      );
    } if (petProfile && petResponse) {
    return (
      <li className="question-li">
        <h3 className="question">{question.pet_question}</h3>
        <div className="question-response">{petResponse.body}</div>
      </li>
    );
  } if (petProfile && !petResponse) {
    return (
      <li className="question-li">
        <h3 className="question">{question.pet_question}</h3>
        <div className="question-response">No response... yet.</div>
      </li>
    );
  } else {
    return (
    <li>null</li>
    );
  }
};

export default QuestionIndexItem;
