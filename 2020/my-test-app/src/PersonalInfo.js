import React from "react";

import "./personal-info.css";

export const PersonalInfo = props => (
  <div className="info">
    <p>Hello, {props.name}!</p>
    <p>You are currently at: {props.location}</p>
    <p>You are {props.age} years old!</p>
  </div>
);
