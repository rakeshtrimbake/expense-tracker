import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../components/Category/Category";
import Credit from "../components/Credit/Credit";
import Expense from "../components/Expense/Expense";
import Reports from "../components/Reports/Reports";
import Login from "../components/Login/Login";
import AddCategory from "../components/Category/AddCategory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/category",
        element: <Category />,
        children: [
          {
            path: "/category/add",
            element: <AddCategory />,
          },
        ],
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
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
