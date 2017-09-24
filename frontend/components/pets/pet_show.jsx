import React from 'react';
import { Link } from 'react-router-dom';

import PetShowContainer from './pet_show_container';
import NavContainer from '../nav/nav_container';

class PetShow extends React.Component {
  componentDidMount() {
    this.props.fetchPet(this.props.match.params.petId);
  }

  render() {
    // console.log("this.props.pet", this.props.pet);
    const pet = this.props.pet;

    if (pet) {
      console.log(pet);
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
