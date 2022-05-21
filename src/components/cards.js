import React from "react";

import './cards.css'
const Card = (props) => {
  console.log(props);
  return (
    <div className="movieCard m-2">
      <img src={props.img.movieImg} alt="" />
      <div className="movieDetail p-2">
        <h1>Movie Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, illum esse distinctio necessitatibus aut iure.</p>
      </div>
    </div>
  );
};

export default Card;
