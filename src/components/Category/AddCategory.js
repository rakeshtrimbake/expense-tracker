import styles from "./AddCategory.module.css";
import { Link, useNavigate } from "react-router-dom";
const AddCategory = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button
          style={{ color: "green", padding: "6px 10px", cursor:'pointer', textDecoration: 'none' }}
          onClick={goBack}
        >
          <Link to="/category"> Go Back</Link>
        </button>
        <h3 className={styles.title}>Add Category</h3>
        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Description</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
