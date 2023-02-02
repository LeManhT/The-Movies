import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import Card from "./components/ui/card/Card";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";
import Discussion from "./components/ui/discussion/Discussion";

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
      {/* {!!trendingData &&
        trendingData.results.map((e) => {
          return (
            <Card
              width={150}
              height={225}
              image={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`}
              name={e.name || e.title}
              releaseDate="Jan 15, 2023"
              displayIcon
              // actor={"Park Ji Sung"}
            />
          );
        })} */}
      {/* <Discussion
        img="https://www.themoviedb.org/t/p/w45_and_h45_face/qpuUNplRt3TrrEratMUFZiofNWD.jpg"
        link="Bill made a pretty dumb mistake for being a survivalist"
        status="Open"
        count="0"
        date="Feb 01, 2023 at 1:07 AM"
      />
      <Discussion
        img="https://www.themoviedb.org/t/p/w45_and_h45_face/qpuUNplRt3TrrEratMUFZiofNWD.jpg"
        link="So far following the game pretty faithfully"
        status="Open"
        count="2"
        date="Jan 17, 2023 at 6:04 AM"
      /> */}
    </>
  );
}

export default App;
