import React from 'react';
import { Link, withRouter } from 'react-router';

import PetShowContainer from './pet_show_container';
import NavContainer from '../nav/nav_container';
import QuestionIndexContainer from '../questions/question_index_container';

class PetShow extends React.Component {
  constructor(props) {
    super(props);
    this.showMsgButton = this.showMsgButton.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchPet(this.props.match.params.petId);
  }

  showMsgButton() {
    let currentUserId = this.props.currentUser.id;
    let currentPetOwnerId = this.props.pet.user_id;
    if (currentUserId === currentPetOwnerId) {
      return (
        <div></div>
      );
    } else {
      return (
        <div>
          <button
            className='light-blue-btn msg-btn'
            onClick={this.handleMessage}>Send Message</button>
        </div>
      );
    }
  }

  handleMessage(e) {
    e.preventDefault();
    let currentUserId = this.props.currentUser.id;
    let currentPetOwnerId = this.props.pet.user_id;
    let petName = this.props.pet.name;
    let subject = `Adoption inquiry for ${petName}`;
    let conversation = {
      sender_id: currentUserId,
      recipient_id: currentPetOwnerId,
      subject: subject
    };

    // looks for current user's exisiting conversation threads
    let currUserSent = this.props.currentUser.sent_conversations;
    let currUserReceived = this.props.currentUser.received_conversations;
    let currUserConversations = currUserSent.concat(currUserReceived);
    // filters all current user's conversations for matching sender_id
    let existingConversation = currUserConversations.filter(convo =>
      convo.recipient_id === currentPetOwnerId && convo.subject === subject
    );

    if (existingConversation.length > 0) {
      let convoId = existingConversation[0].id;
      this.props.fetchConversation(convoId)
      .then((resp) => this.props.history.push(`/messages/${resp.conversation.id}`));
    } else {
      this.props.createConversation(conversation)
      .then((resp) => {
        this.props.history.push(`/messages/${resp.conversation.id}`);
      });
    }
  }

  render() {
    const pet = this.props.pet;

    if (pet) {
      return (
        <div>
          <NavContainer />

          <div className="profile">
            <div className="profile-header">
              <div className="profile-header-items">
                <div className="profile-img">
                  <img src={pet.img_url} />
                </div>
                <div>
                  <h3>{pet.name}</h3>
                  <p>Age: {pet.age} &middot; {pet.location}</p>
                </div>
                <div>{this.showMsgButton()}</div>
              </div>
            </div>
            <div className="profile-body-wrapper">

              <div className="profile-body">

                <div className="about-me">
                  <h2>Summary:</h2>
                  <div>{pet.summary}</div>
                  <h2>Questions:</h2>
                  <QuestionIndexContainer />
                </div>

                <div className="details">
                  <h2>Species:</h2>
                  <div>{pet.animal_type}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <NavContainer />
          <h1>Loading...</h1>
        </div>
      );
    }
  }
}

export default withRouter(PetShow);
