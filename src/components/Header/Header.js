import styles from "./Header.module.css";
import expenseImg from "./../../expense_tracker.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img
          src={expenseImg}
          className={styles.expense_img}
          alt="expense"
        ></img>
        <ul className={styles.header_list}>
          <li className={styles.list_item}>
            <Link
              to={"/"}
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              {`Category`.toUpperCase()}
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
          <li className={styles.list_item}>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              {`Login`.toUpperCase()}
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
