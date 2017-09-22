import React from 'react';
import PetIndexContainer from './pet_index_container';

import PetIndexItem from './pet_index_item';

class PetIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPets();
    // console.log("didMount", this.props.pets);
  }
  // componentWillMount() {
  //   this.props.fetchAllPets();
  //   // console.log("willMount", this.props.pets);
  //
  // }

  render () {
    console.log("render", this.props.pets);
    return (
      <div className="pet-index">
        <h2>Here are some OK pets...</h2>

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
    );
  }
}
// Implement later when DB is working:
export default PetIndex;
