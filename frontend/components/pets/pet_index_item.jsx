import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const PostIndexItem = (props) => {
  const pet = props.pet;
  const currentUser = props.currentUser;

  // for matching calculations
  let matches = 0;
  let matchPercentage = 0;
  let i = 0;
  const petResponses = pet.responses;
  const userResponses = currentUser.responses;

  if (userResponses.length > 0) {
    for (i = 0; i < petResponses.length; i ++) {
      if (userResponses[i].body === petResponses[i].body) {
        matches += 1;
      }
    }
  } else {
    matches = 0;
  }

  if (matches !== 0) {
    matchPercentage = Math.round((matches/petResponses.length)*100);
  } else {
    matchPercentage = 0;
  }

  return (
    <li>
      <div className="match-wrapper">
        <Link to={`/pets/${pet.id}`}>
          <div>
              <img
              className="pet-img"
              src={pet.img_url}
              alt={pet.name} />
          </div>
          <div className="match-info">
            <h3 className="match-name">{pet.name}</h3>
            <div className="match-age-loc">Age: {pet.age} &middot; {pet.location}</div>
            <div className="match-percentage"><h3>{matchPercentage}%</h3></div>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default PostIndexItem;
