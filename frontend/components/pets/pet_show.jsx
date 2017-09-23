import React from 'react';
import { Link } from 'react-router-dom';

import PetShowContainer from './pet_show_container';
import NavContainer from '../nav/nav_container';

class PetShow extends React.Component {
  componentDidMount() {
    this.props.fetchPet(this.props.match.params.petId);
  }

  render() {
    console.log("this.props.pet", this.props.pet);
    const pet = this.props.pet;

    if (pet) {
      console.log(pet);
      return (
        <div>
          <NavContainer />
          <div>
            <div className="profile-img-icon-wrapper">
              <img src={pet.img_url} />
            </div>
            <h1>{pet.name}</h1>

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
