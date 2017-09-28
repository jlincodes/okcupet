import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndex from './question_index';

const QuestionIndexItem = (props) => {
  const question = props.question;
  const userProfile = props.userProfile;
  const petProfile = props.petProfile;
  // console.log(userProfile);
  // console.log(petProfile);

  if (userProfile) {

    return (
      <li>{question.user_question}</li>
    );
  } else {
    return (
      <li>{question.pet_question}</li>
    );
  }
};

export default QuestionIndexItem;
