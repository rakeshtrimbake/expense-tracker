import React from "react";
import CategoryList from "./CategoryList";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.category_heading}>Category List Details</div>
      <CategoryList />
    </div>
  );
};

export default Category;
