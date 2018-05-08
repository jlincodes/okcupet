import React from 'react';
import QuestionIndexContainer from './question_index_container';

import QuestionIndexItem from './question_index_item';
import NavContainer from '../nav/nav_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.pet) {
      this.props.fetchAllQuestions()
      .then(this.props.fetchPetResponses(this.props.match.params.petId));
    } else {
      this.props.fetchAllQuestions()
      .then(this.props.fetchUserResponses(this.props.match.params.userId));
    }
  }

  render() {
    const questions = this.props.questions;
    const userProfile = this.props.user;
    const petProfile = this.props.pet;
    const petResponses = this.props.petResponses;
    const userResponses = this.props.userResponses;

    if (!questions) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div>
          <ul className="questions-ul">
            {
              questions.map( (question, idx) => (
                <QuestionIndexItem
                  key={idx}
                  question={question}
                  userProfile={userProfile}
                  petProfile={petProfile}
                  petResponse={petResponses[idx]}
                  userResponse={userResponses[idx]}/>
              ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default QuestionIndex;
