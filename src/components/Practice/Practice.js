import React, { useEffect, useState } from "react";
import styles from "./Practice.module.css";

const Practice = () => {
  const [finalArray, setFinalArray] = useState([]);

  useEffect(() => {
    getSortedData();
  }, []);

  const getSortedData = () => {
    let outerArray = [];
    let count = 1;
    for (let i = 1; i <= 10; i++) {
      let innerArray = [];
      for (let j = 1; j <= 10; j++) {
        innerArray.push(count);
        count++;
      }
      if (i % 2 === 0) {
        innerArray.reverse();
      }
      outerArray.push(innerArray);
    }
    setFinalArray(outerArray.reverse());
  };

  return (
    <>
      <div>
        <ul className={styles.outerUl}>
          {finalArray.map((outer, index) => (
            <li className={styles.outerList} key={index}>
              {outer.map((inner, index) => (
                <li key={index}>{inner}</li>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Practice;
