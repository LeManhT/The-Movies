import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import PersonPage from "../pages/PersonPage";
import NotfoundPage from "../pages/NotfoundPage"

const RouterPage = () => {
  let Routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/movie/:info",
          element: <MovieDetailPage />,
        },
        {
          path: "/person/:info",
          element: <PersonPage />,
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
