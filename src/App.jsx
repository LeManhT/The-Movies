import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import Card from "./components/ui/card/Card";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";
import SearchItemResult from "./components/ui/searchItemResult/SearchItemResult";
import Menu from "./components/ui/menu/Menu";
import Collection from "./components/ui/collection/Collection";

function App() {
  // const {data: trendingData, error: trendingError, isLoading, fetch: getMovie} = useFetch(tmdbApi.getTrending, { time_window: "week" }, true)
  const {
    data: trendingData,
    error: trendingError,
    isLoading,
    fetch: getPerson,
  } = useFetch(tmdbApi.getPersonDetail);

  useEffect(() => {
    getPerson({person_id: 4});
  }, []);

  console.log(trendingData, isLoading);

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

      {/* <DropDown>{["Popular", "Now Playing", "Upcoming"]}</DropDown> */}
      {/* <Menu menuContent={[{ content: 'Movies', quantity: 50 }, { content: 'TV Shows', quantity: 50 }, { content: 'People', quantity: 50 }]} /> */}
      <Collection collection={{ title: "THAT'S AWRAP 2022", desc: "The best (and worst) from 2022", style: { fontSizeTitle: '40px', fontSizeDesc: '20px', backgroundImage: "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/5GISMqlRXMEyBrgEqyvhaMMuQmJ.jpg" } }}>
        <button>Check it out</button>
      </Collection>
    </>
  );
}

export default App;
