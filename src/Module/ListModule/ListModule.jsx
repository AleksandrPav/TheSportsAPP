import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { NavLink } from "react-router-dom";

const listModule = ({ sports }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {sports.map((sport) => (
        <ul className="col" key={sport.idSport}>
          <li className="card">
            <img
              src={sport.strSportThumb}
              className="card-img-top"
              alt="..."
              style={{ height: "100", width: "100" }}
            />
            <div className="card-body">
              <h5 className="card-title">{sport.strSport}</h5>
              <p className="card-text">{sport.strFormat}</p>
              <NavLink
                to={`/about/${sport.idSport}`}
                className="btn btn-primary"
              >
                Show more
              </NavLink>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default listModule;
