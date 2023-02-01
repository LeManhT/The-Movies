import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import Card from "./components/ui/card/Card";
import DropDown from "./components/ui/dropDown/DropDown";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";

function App() {
  // const {data: trendingData, error: trendingError, isLoading, fetch: getMovie} = useFetch(tmdbApi.getTrending, { time_window: "week" }, true)
  const {
    data: trendingData,
    error: trendingError,
    isLoading,
    fetch: getMovie,
  } = useFetch(tmdbApi.getTrending);

  useEffect(() => {
    getMovie({ time_window: "week" });
  }, []);

  console.log(trendingError);

  return (
    <>
      <RouterPage />
      <ToastContainer />
      <Loading />
      {!!trendingData &&
        trendingData.results.map((e) => {
          return (
            <Card
              width={150}
              height={225}
              image={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`}
              name={e.name || e.title}
              releaseDate="Jan 15, 2023"
            />
          );
        })}

      <DropDown>{["Popular", "Now Playing", "Upcoming"]}</DropDown>
    </>
  );
}

export default App;
