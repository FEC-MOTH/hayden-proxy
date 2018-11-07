import React from 'react';
import StarListEntry from './StarListEntry';
import '../css/Rating.css';

const Rating = props => {

  const filterStatus = (
      <div className="filterStatus">
        Showing reviews:{' '}
        <ul className="filterList">
          {props.filters.map((star, i) => (
            <li className="filterListItem" key={i}>{star} STARS</li>
          ))}
        </ul>
        <a onClick={props.handleRemoveFilterClick}>Remove all filters</a>
      </div>
    );

  const calculateStars = num => {
    let count = 0;
    props.data.forEach(comment => {
      if (comment.prodRating === num) {
        count += 1;
      }
    });
    return count;
  }

  return (
    <div className="ratingM">
      <h5 id="breakdown">Rating Breakdown</h5>
      {props.filters.length > 0 ? filterStatus : ''}
      <ul>
        <StarListEntry
          id={5}
          handleRateClick={props.handleRateClick}
          length={props.data.length}
          count={calculateStars(5)}
        />
        <StarListEntry
          id={4}
          handleRateClick={props.handleRateClick}
          length={props.data.length}
          count={calculateStars(4)}
        />
        <StarListEntry
          id={3}
          handleRateClick={props.handleRateClick}
          length={props.data.length}
          count={calculateStars(3)}
        />
        <StarListEntry
          id={2}
          handleRateClick={props.handleRateClick}
          length={props.data.length}
          count={calculateStars(2)}
        />
        <StarListEntry
          id={1}
          handleRateClick={props.handleRateClick}
          length={props.data.length}
          count={calculateStars(1)}
        />
      </ul>
    </div>
  );
}

export default Rating;
