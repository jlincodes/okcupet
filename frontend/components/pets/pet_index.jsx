import React from 'react';
import PetIndexContainer from './pet_index_container';

import PetIndexItem from './pet_index_item';
import GreetingContainer from '../greeting/greeting_container';


class PetIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPets();
  }

  render () {
    return (
      <div>
        <GreetingContainer />
        <div className="matches-index">
          <h2>Here are some OK pets...</h2>
          <div className="filter-sort-wrapper">filter and sort by placeholder</div>
          <div className="pet-index">
            <ul className="pets-list">
              {
                this.props.pets.map( (pet, idx) => (
                  <PetIndexItem
                    key={idx}
                    pet={pet} />
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PetIndex;
