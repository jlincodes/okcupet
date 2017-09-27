import React from 'react';
import QuestionIndexContainer from './question_index_container';

// import QuestionIndexItem from './question_index_item';
import NavContainer from '../nav/nav_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllQuestions();
      // .then(this.props.fetchAllResponses)
  }

  render() {
    const questions = this.props.questions;
    if (!questions) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Questions</h1>
        </div>
      );
    }
  }
}

export default QuestionIndex;
