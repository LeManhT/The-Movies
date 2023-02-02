import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import tmdbApi from "./api/tmdbApi";
import useFetch from "./hooks/useFetch";
import "./App.scss";
import ReadMore from "./components/ui/readmore/ReadMore";

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
      <ReadMore >Letitia Michelle Wright (born 31 October 1993) is a Guyanese-British actress. Beginning her professional career in 2011, she has played roles in several British TV series, including Top Boy (2011), Coming Up (2013), Chasing Shadows (2014), Humans (2016), the Doctor Who episode "Face the Raven" (2015) and the Black Mirror episode "Black Museum" (2017); for the latter, she received a Primetime Emmy Award nomination for Outstanding Supporting Actress in a Limited Series or Movie.</ReadMore>
    </>
  );
}

export default App;
