import React, { useState } from "react";
import CategoryList from "./CategoryList";
import styles from "./Category.module.css";
import { Link } from "react-router-dom";
import AddCategory from "./AddCategory";

const Category = () => {
  const [isModal, setIsModal] = useState(false);

  const clickHandler = () => {
    setIsModal(true);
  };
  return (
    <>
      {isModal && <AddCategory />}
      <div className={styles.category}>
        <div className={styles.category_header}>
          <div className={styles.category_heading}>Category List Details</div>
          <div>
            <button className={styles.button} type="button">
              <Link to="/category/add" onClick={clickHandler}>
                Add Category
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.table}>
          <CategoryList />
        </div>
      </div>
    </>
  );
};

export default Category;
