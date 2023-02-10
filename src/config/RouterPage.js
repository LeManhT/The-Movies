import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MovieDetailPage from "../pages/MovieDetailPage";
import NotfoundPage from "../pages/NotfoundPage"
import PersonDetailPage from "../pages/PersonDetailPage";
import SearchPage from "../pages/SearchPage";

const RouterPage = () => {
  let Routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/search/:category",
          element: <SearchPage />,
        },
        {
          path: "/movie/:info",
          element: <MovieDetailPage />,
        },
        {
          path: "/person/:info",
          element: <PersonDetailPage />,
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
