import React from 'react';
import PetIndexContainer from './pet_index_container';

import PetIndexItem from './pet_index_item';
import NavContainer from '../nav/nav_container';


class PetIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pets: this.props.pets};
    this.handleSearchBySpecies = this.handleSearchBySpecies.bind(this);
    this.handleSearchByLoc = this.handleSearchByLoc.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPets();
  }

  handleSearchBySpecies(e) {
    e.preventDefault();
    if (this.props) {
      this.props.searchPets(e.currentTarget.value);
    }
  }

  handleSearchByLoc(e) {
    e.preventDefault();
    if (this.props) {
      this.props.searchPets(e.currentTarget.value);
    }
  }

  render () {
    if (!this.props) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <NavContainer />
        <div className="matches-index">
          <h2>Here are some OK pets...</h2>
          <div className="filter-wrapper">
            Filter by species:
            <select className="pet-species-dropdown" onChange={this.handleSearchBySpecies}>
              <option value ="any" defaultValue>--Any--</option>
              <option value="cat">cat</option>
              <option value="dire wolf">dire wolf</option>
              <option value="dog">dog</option>
              <option value="dragon">dragon</option>
            </select>

            Filter by location:
            <select className="pet-loc-dropdown" onChange={this.handleSearchByLoc}>
              <option value ="any" defaultValue>--Any--</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Westeros">Westeros</option>
            </select>
          </div>
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
