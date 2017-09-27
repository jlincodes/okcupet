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
            onClick={this.handleMessage}>Message</button>
        </div>
      );
    }
  }

  handleMessage(e) {
    e.preventDefault();
    let currentUserId = this.props.currentUser.id;
    let currentPetOwnerId = this.props.pet.user_id;
    let petName = this.props.pet.name;
    let conversation = {
      sender_id: currentUserId,
      recipient_id: currentPetOwnerId,
      subject: `Adoption Inquiry for ${petName}`
    };

    this.props.createConversation(conversation)
    .then((resp) => {
      this.props.history.push(`/messages/${resp.conversation.id}`);
    });
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
