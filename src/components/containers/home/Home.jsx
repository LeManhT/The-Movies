import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tmdbApi from "../../../api/tmdbApi";
import { LASTEST_TRAILERS, TRENDING } from "../../../constants/constants";
import useFetch from "../../../hooks/useFetch";
import Button from "../../ui/button/Button";
import Collection from "../../ui/collection/Collection";
import Input from "../../ui/input/Input";
import Card from "../../ui/card/Card";
import ListHorizontal from "../../ui/listHorizontal/ListHorizontal";
import { ToastError } from "../../../utils/toast";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();
  const [timeTrending, setTimeTrending] = useState(
    TRENDING.listTimeTrending[0]
  );
  const [categoryTrailers, setCategoryTrailers] = useState(
    LASTEST_TRAILERS.listCategory[0]
  );
  const {
    data: trendingData,
    error: trendingError,
    isLoadingTrending,
    fetch: getTrending,
  } = useFetch(tmdbApi.getTrending);

  const {
    data: topRatedData,
    error: topRatedError,
    isLoadingTopRated,
    fetch: getTopRated,
  } = useFetch(tmdbApi.getTopRated);

  useEffect(() => {
    if (timeTrending === "Today") {
      getTrending({ time_window: "day" });
    }
    if (timeTrending === "This Week") {
      getTrending({ time_window: "week" });
    }
  }, [timeTrending]);

  useEffect(() => {
    if (categoryTrailers === "On TV") {
      getTopRated({ category: "movie", page: 1 });
    }
    if (categoryTrailers === "In Theaters") {
      getTopRated({ category: "tv", page: 1 });
    }
  }, [categoryTrailers]);

  const handleClickCardPoster = (item) => {
    if (item.media_type === "movie") {
      navigate(`/movie/${item.id}`);
    } else {
      ToastError("Khong code page TV Detail !!!");
    }
  };

  return (
    <div className="homepage">
      {/* Background 1 */}
      <Collection
        collection={{
          title: "Welcome.",
          desc: "Millions of movies, TV shows and people to discover. Explore now.",
        }}
        styleCss={{
          backgroundImage:
            "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/fgYfch0MGfNEpgzPst49ThKUqA4.jpg",
          fontSizeTitle: "3em",
          fontWeightTitle: "700",
          lineHeightTitle: "60px",
          fontSizeDesc: "2em",
          fontWeightDesc: "600",
          marginTopOther: "50px",
          widthOther: "100%",
        }}
      >
        <Input
          type="text"
          placeholder="Search for a movie, tv show, person ..."
          styleCss={{
            height: "46px",
            borderRadius: "30px",
            fontSizeInput: "16px",
            paddingInput: "0 20px",
            colorInput: "rgba(0, 0, 0, 0.5)",
          }}
          btnInput
          nameBtnInput="Search"
        />
      </Collection>

      {/* Background 2 */}
      <Collection
        collection={{
          title: "THAT'S A WRAP 2022",
          desc: "The best (and worst) from 2022.",
        }}
        styleCss={{
          backgroundImage:
            "https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg",
          widthTitle: "354px",
          fontSizeTitle: "70px",
          fontWeightTitle: "700",
          lineHeightTitle: "70px",
          fontSizeDesc: "20px",
          fontWeightDesc: "500",
          marginTopOther: "14px",
          widthOther: "100%",
          widthDivideBar: "34%",
          marginDivideBar: "8px 0",
        }}
        divideBar
      >
        <Button
          styleCss={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "10px 18px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          Check it out
          <i className="fa-solid fa-arrow-right icon-arrow"></i>
        </Button>
      </Collection>

      {/* Trending */}
      <ListHorizontal
        titleTab={TRENDING.title}
        listItemTab={TRENDING.listTimeTrending}
        itemTabActive={timeTrending}
        onClickTab={(time) => setTimeTrending(time)}
        styleCssTabPrimary={{
          backgroundImage:
            "https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg",
          backgroundSize: "var(--maxPrimaryPageWidth)",
          backgroundPosition: "50% 200px",
          colorTitle: "#000",
          borderMain: "1px solid rgba(var(--tmdbDarkBlue), 1)",
          textColor: "rgba(var(--tmdbDarkBlue), 1)",
          backgroundColor: "transparent",
          textColorActive: "#a6efc4",
          backgroundColorActive: "rgba(var(--tmdbDarkBlue), 1)",
        }}
      >
        {trendingData ? (
          trendingData.results.map((item) => {
            return (
              <div className="item-trending" key={item.id}>
                <Card
                  width={150}
                  heightImage={225}
                  image={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  name={item.name || item.title}
                  description={item.release_date}
                  displayIcon
                  vote={Math.round(item.vote_average * 10)}
                  styleCss={{
                    textAlign: "left",
                    fontSizeName: "16px",
                    fontWeightName: "700",
                    textColorName: "#000",
                    fontSizeDesc: "16px",
                    fontWeightDesc: "400",
                    textColorDesc: "rgba(0,0,0,0.6)",
                  }}
                  displayIconCirclePercent
                  onClickCard={() => handleClickCardPoster(item)}
                />
              </div>
            );
          })
        ) : (
          <div>Chua co du lieu</div>
        )}
      </ListHorizontal>

      <ListHorizontal
        titleTab={LASTEST_TRAILERS.title}
        listItemTab={LASTEST_TRAILERS.listCategory}
        itemTabActive={categoryTrailers}
        onClickTab={(category) => setCategoryTrailers(category)}
        styleCssTabPrimary={{
          backgroundImage:
            "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/hUtrCoGrlo3o8juAI1ZzA7F1LX9.jpg",
          backgroundSize: "1700px 378px",
          backgroundPosition: "50% 0",
          colorTitle: "#fff",
          borderMain: "1px solid rgba(var(--tmdbLightGreen), 1)",
          textColor: "#fff",
          backgroundColor: "transparent",
          textColorActive: "rgba(var(--tmdbDarkBlue), 1)",
          backgroundColorActive:
            "linear-gradient(to right, rgba(var(--tmdbLighterGreen), 1) 0%, rgba(var(--tmdbLightGreen), 1) 100%)",
        }}
      >
        {topRatedData ? (
          topRatedData.results.map((item) => {
            return (
              <div className="item-trending" key={item.id}>
                <Card
                  width={300}
                  heightImage={168}
                  image={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`}
                  name={item.name || item.title}
                  description="Official Trailer"
                  styleCss={{
                    textAlign: "center",
                    fontSizeName: "20px",
                    fontWeightName: "600",
                    textColorName: "#fff",
                    fontSizeDesc: "16px",
                    fontWeightDesc: "400",
                    textColorDesc: "#fff",
                  }}
                  displayIconPlay
                  // onClickCard={() => handleClickCardPoster(item)}
                />
              </div>
            );
          })
        ) : (
          <div>Chua co du lieu</div>
        )}
      </ListHorizontal>
    </div>
  );
};

export default Home;
