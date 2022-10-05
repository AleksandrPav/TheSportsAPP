import React, { useEffect, useState } from 'react';

import { listAllSports } from './shared/api';

import ListModule from './Module/ListModule/ListModule';
import NavBar from './Module/NavBar/NavBarModule';


import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.css';






function App() {

  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const { data} = await listAllSports();
        setSports(data.sports);
      }
      catch (error) {
        
        console.log(error);
      }
      
    };
    fetchSports();
  }, []);




  return (
    <div className={styles.app}>
    <div className="container">
      <NavBar />
      <ListModule sports={sports} />
      </div>
    </div>
  );

}

export default App;
