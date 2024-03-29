import React from "react";
import styles from "./Home.module.css";
import Sidebar from "../Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.child}>
          <Sidebar />
        </div>
        <div className={styles.child}>
          <Outlet />    
        </div>
        
      </div>
      
    </>
  );
}

export default Home;
