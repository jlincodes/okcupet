import React from 'react';
import PetIndexContainer from './pet_index_container';

import PetIndexItem from './pet_index_item';
import NavContainer from '../nav/nav_container';


class PetIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pets: this.props.pets};
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPets();
  }

  handleSearch(e) {
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
          <div className="filter-sort-wrapper">
            Filter by species:
            <select className="pet-search-dropdown" onChange={this.handleSearch}>
              <option value ="select" disabled>--Select--</option>
              <option value="cat">cat</option>
              <option value="dire wolf">dire wolf</option>
              <option value="dog">dog</option>
              <option value="dragon">dragon</option>
            </select>

            Filter by location:
            <select className="pet-loc-dropdown" onChange={this.handleSearch}>
              <option value ="select" disabled>--Select--</option>
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


// {this.searchPets()}
