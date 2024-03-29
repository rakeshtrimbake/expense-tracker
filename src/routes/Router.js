import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../components/Category/Category";
import Credit from "../components/Credit/Credit";
import Expense from "../components/Expense/Expense";
import Reports from "../components/Reports/Reports";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Category />,
      },
      {
        path: "/credit",
        element: <Credit />,
      },
      {
        path: "/expense",
        element: <Expense />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
]);
