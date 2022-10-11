import React from "react";

import "./AboutList.scss";

const AboutList = ({ sports, handleBtn }) => {
  return (
    <div className="nav justify-content-center">
      {sports.map((sport) => (
        <ul className="nav" key={sport.idSport}>
          <li className="nav-item">
            <button
              className="btn btn-outline-light"
              onClick={() => handleBtn(sport.idSport)}
              to={`/about/${sport.idSport}`}
            >
              <img
                src={sport.strSportIconGreen}
                className="card-img-top"
                alt="..."
              />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AboutList;
