import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";
import Selectors from "./components/ui/selectors/Selectors";

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
