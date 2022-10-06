import React from 'react';

import NavBar from './Module/NavBar/NavBarModule';
import UserRoutes from './UserRoutes';


import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.css';






function App() {

  return (
    <div className={styles.app}>
    <div className="container">
        <NavBar />
        <UserRoutes />
      </div>
    </div>
  );

}

export default App;
