import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const PostIndexItem = (props) => {
  const pet = props.pet;
  return (
    <li>
      <div>
        <img src="http://skypaws.net/wp-content/uploads/2016/02/kitten.jpg" alt={pet.name} />
      </div>
      <div>{pet.name}</div>
      <div>Age: {pet.age} &middot; {pet.location}</div>
    </li>
  );
};

export default PostIndexItem;
