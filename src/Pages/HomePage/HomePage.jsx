import React, { useEffect, useState } from "react";

import { listAllSports } from "../../shared/api";
import ListModule from "../../Module/ListModule/ListModule";
import "./HomePage.scss";

const HomePage = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchSports = async () => {
      const { data } = await listAllSports();
      setSports(data.sports);
      setLoading(false);
    };
    fetchSports();
  }, []);

  return loading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center">List of sports</h1>
      <ListModule sports={sports} />
    </div>
  );
};

export default HomePage;
