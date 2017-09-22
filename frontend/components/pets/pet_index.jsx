
import React from 'react';
import PetIndexContainer from './pet_index_container';
import PetItemIndex from './pet_index_item';

class PetIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.props = this.props;
    this.props.fetchAllPets();
  }

  render () {
    return (
      <div>
        <h2>Here are some OK pets...</h2>
      </div>
    );
  }
}
// Implement later when DB is working:
// <ul className="pets-list">
//   {
//     this.props.pets.map( pet => (
//       <PetIndexItem
//         key={pet.id}
//         pet={pet} />
//     ))
//   }
// </ul>
export default PetIndex;
