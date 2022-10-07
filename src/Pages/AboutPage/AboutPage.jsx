import React, { useEffect, useState } from "react";

import { listAllSports } from "../../shared/api";
import AboutList from "../../Module/AboutList/AboutList";
import AboutCard from "../../Module/AboutCard/AboutCard";

import "./AboutPage.scss";

const AboutPage = () => {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(false);
  const [getId, setGetId] = useState({});

  useEffect(() => {
    setLoading(true);
    const fetchSports = async () => {
      const { data } = await listAllSports();
      setSports(data.sports);
      setLoading(false);
    };
    fetchSports();
  }, []);

  const handleBtn = (id) => {
    setButton(true);
    const findId = sports.find((sport) => sport.idSport === id);
    setGetId(findId);
  };

  return loading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1 className="text-center">About Sport</h1>
      <AboutList sports={sports} handleBtn={handleBtn} />
      <div className="conteiner-card">
        {button && <AboutCard getId={getId} />}
      </div>
    </div>
  );
};

export default AboutPage;
