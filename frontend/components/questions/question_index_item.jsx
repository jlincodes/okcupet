import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndex from './question_index';
import PetResponseContainer from '../pet_responses/pet_resp_container';

const QuestionIndexItem = (props) => {
  const question = props.question;
  const userProfile = props.userProfile;
  const petProfile = props.petProfile;
  const petResponse = props.petResponse;
  // console.log(userProfile);
  // console.log(petProfile);
  // console.log('props', props);
  // console.log("question", question);
  // console.log("pet resp", petResponses);



  if (userProfile) {

    return (
      <li>{question.user_question}</li>
    );
  } else {
    return (
      <li>
        <div>{question.pet_question}</div>
        <div>{petResponse.body}</div>
      </li>
    );
  }
};

export default QuestionIndexItem;
