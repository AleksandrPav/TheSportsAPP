import React, { useEffect, useState } from "react";

import { listAllLeagues } from "../../shared/api";

import "./SportPage.scss";

const SportPage = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchLeagues = async () => {
      const { data } = await listAllLeagues();
      setLeagues(data.leagues);
      setLoading(false);
    };
    fetchLeagues();
  }, []);

  return loading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center">Sport Page</h1>
      <div className="row">
        {leagues.map((league) => (
          <div className="col-4" key={league.idLeague}>
            <div className="card">
              <img
                src={league.strBadge}
                className="card-img-top"
                alt="..."
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{league.strLeague}</h5>
                <p className="card-text">{league.strSport}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportPage;
