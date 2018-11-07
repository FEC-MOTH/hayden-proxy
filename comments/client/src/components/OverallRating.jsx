import React from 'react';
import '../css/OverallRating.css';
import Star from './Star';

const OverallRating = props => (
  <div className="overallRating">
    <div className="ratingNumber">{props.rating}</div>
    <div className="container2">
      <div className="ratingStars">
        {props.ratingToStarTranslation(props.rating).map((filling, i) => (
          <Star filling={filling} key={i} id={Math.random()}/>
        ))}
      </div>
      <span className="reviewNumber">
        <strong>{props.data.length}</strong> Reviews
      </span>
    </div>
  </div>
);

export default OverallRating;
