import styles from "./Expense.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, increment, decrement } from "../../slices/counteSlice";

const Expense = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  const increaseByFive = () => {
    dispatch(increase({ amount: 5 }));
  };
  return (
    <div className={styles.expense}>
      <button
        style={{ margin: "1rem", padding: ".5rem" }}
        onClick={incrementHandler}
      >
        INCREMENT
      </button>
      <span>{counter}</span>
      <button
        style={{ margin: "1rem", padding: ".5rem" }}
        onClick={decrementHandler}
      >
        DECREMENT
      </button>
      <button
        style={{ margin: "1rem", padding: ".5rem" }}
        onClick={increaseByFive}
      >
        INCREASE
      </button>
    </div>
  );
};

export default Expense;
