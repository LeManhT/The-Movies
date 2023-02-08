import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";
import SearchItemResult from "./components/ui/searchItemResult/SearchItemResult";

function App() {
  return (
    <>
      <RouterPage />
      <ToastContainer />
      <Loading />
    </>
  );
}

export default App;
