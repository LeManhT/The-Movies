import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";
function App() {
  // const {
  //   data: trendingData,
  //   error: trendingError,
  //   isLoading,
  //   fetch: getPerson,
  // } = useFetch(tmdbApi.getPersonDetail);

  // useEffect(() => {
  //   getPerson({ person_id: 4 });
  // }, []);

  // console.log(trendingData, isLoading);

  return (
    <>
      <RouterPage />
      {/* <SearchItemResult imgSrc={"https://www.themoviedb.org/t/p/w90_and_h90_face/qPZeVZqH1z7n5LVKVdzwXbAHe6s.jpg"} title={"They Call Me Trinity"} overview={"Acting • Vương Triều Cuối Cùng, The Last King, Polaroid"} ></SearchItemResult> */}

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
      {/* <SearchItemResult  imgSrc="sd" title="sdfsdf" releaseDate="qq" overview="sd"/> */}
    </>
  );
}

export default App;
