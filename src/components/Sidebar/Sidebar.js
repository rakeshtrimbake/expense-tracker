import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className={styles.sidebar_list}>
        <li className={styles.list_item}>
          <Link to="/category" style={{ textDecoration: "inherit", color: "inherit" }}>
            {`category`.toUpperCase()}
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to="/credit"
          >
            {`credit`.toUpperCase()}
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            to="expense"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {`expense`.toUpperCase()}
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            to="/reports"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            {`reports`.toUpperCase()}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
