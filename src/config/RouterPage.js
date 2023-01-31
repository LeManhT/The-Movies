import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CategoryPage from "../pages/CategoryPage";
import NotfoundPage from "../pages/NotfoundPage"

const RouterPage = () => {
  let Routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:category/:type",
          element: <CategoryPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <NotfoundPage />,
        },
      ],
    },
  ]);

  return Routes;
};

export default RouterPage;
