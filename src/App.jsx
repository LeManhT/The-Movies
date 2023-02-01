import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import tmdbApi from "./api/tmdbApi";
import "./App.scss";

function App() {
  useEffect(() => {
    const getMovie = async () => {
      const res = await tmdbApi.getVideos("movie", { movie_id: 3 });
      console.log(res);
    };

    getMovie();
  }, []);

  console.log(1233)
  
  return (
    <>
      <RouterPage />
      <ToastContainer />
      <Loading />
    </>
  );
}

export default App;
