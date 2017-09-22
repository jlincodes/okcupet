import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const PostIndexItem = (props) => {
  const pet = props.pet;
  return (
    <li>
      <div className="match-wrapper">
        <div>
          <Link to={`/pets/${pet.id}`}>
            <img
            className="pet-img"
            src="http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg"
            alt={pet.name} />
          </Link>
        </div>
        <div className="match-info">
          <h3 className="match-name">{pet.name}</h3>
          <div className="match-age-loc">Age: {pet.age} &middot; {pet.location}</div>
          <div className="match-percentage">100%</div>
        </div>
      </div>
    </li>
  );
};

export default PostIndexItem;
