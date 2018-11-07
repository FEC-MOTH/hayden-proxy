import React from 'react';
import '../css/Star.css';

const Star = props => (
  <svg className="star" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id={props.id}>
      <stop offset={props.filling} stopOpacity="1" stopColor="currentcolor" />
      <stop offset={props.filling} stopOpacity="1" stopColor="currentcolor" />
      <stop offset={props.filling} stopOpacity="0" stopColor="currentcolor" />
      <stop offset={props.filling} stopOpacity="0" stopColor="currentcolor" />
    </linearGradient>
    <path
      fill="none"
      stroke="currentColor"
      strokeMiterlimit="10"
      d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
    />
    <path
      fill={`url(#${props.id})`}
      stroke="0"
      d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
    />
  </svg>
);


export default Star;
