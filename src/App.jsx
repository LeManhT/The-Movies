import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import RouterPage from "./config/RouterPage";
import Loading from "./components/ui/loading/Loading";
import tmdbApi from "./api/tmdbApi";
import "./App.scss";
import Card from "./components/ui/card/Card";

function App() {
  useEffect(() => {
    const getMovie = async () => {
      const res = await tmdbApi.getVideos("movie", { movie_id: 3 });
      console.log(res);
    };

    getMovie();
  }, []);

  console.log(1233);

  return (
    <>
      <RouterPage />
      <ToastContainer />
      <Loading />
      <Card
        width={150}
        height={225}
        image="https://www.themoviedb.org/t/p/w220_and_h330_face/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg"
        name="Người Sói Tuổi Teen: Bản Điện Ảnh"
        releaseDate="Jan 18, 2023"
      />
    </>
  );
}

export default App;
