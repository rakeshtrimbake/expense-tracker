import styles from "./Header.module.css";
import expenseImg from "./../../expense_tracker.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={expenseImg} className={styles.expense_img} alt="expense"></img>
        <ul className={styles.header_list}>
          <li className={styles.list_item}><Link to={'/'}>{`Category`.toUpperCase()}</Link></li>
          <li className={styles.list_item}>{`reports`.toUpperCase()}</li>
          <li className={styles.list_item}>{`Login`.toUpperCase()}</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
