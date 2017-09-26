import React from 'react';
import { Link } from 'react-router-dom';

import PetShowContainer from './pet_show_container';
import NavContainer from '../nav/nav_container';

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
    // console.log("convo", conversation);

    this.props.createConversation(conversation)
    .then(convo => {
      console.log(convo);
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
                  <p>{pet.summary}</p>
                </div>
                <div className="details">
                  <h2>Species:</h2>
                  <p>{pet.animal_type}</p>
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

export default PetShow;
