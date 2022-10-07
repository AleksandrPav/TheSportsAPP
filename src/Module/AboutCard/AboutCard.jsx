import React from "react";

import "./AboutCard.scss";

const AboutCard = ({ getId }) => {
  return (
    <div className="card text-bg-secondary mb-3">
      <div className="card-body">
        <h5 className="card-title">{getId.strSport}</h5>
        <p className="card-text">{getId.strSportDescription}</p>
      </div>
    </div>
  );
};

export default AboutCard;
