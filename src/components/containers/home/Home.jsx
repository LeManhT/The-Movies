import React, { useState, useEffect } from "react";
import tmdbApi from "../../../api/tmdbApi";
import { listTimeTrending } from "../../../constants/constants";
import useFetch from "../../../hooks/useFetch";
import Button from "../../ui/button/Button";
import Collection from "../../ui/collection/Collection";
import Input from "../../ui/input/Input";
import ListHorizontal from "../../ui/listHorizontal/ListHorizontal";
import "./home.scss";

const Home = () => {
  const [timeTrending, setTimeTrending] = useState(listTimeTrending[0]);

  const {
    data: trendingData,
    error: trendingError,
    isLoading,
    fetch: getTrending,
  } = useFetch(tmdbApi.getTrending);

  useEffect(() => {
    if (timeTrending === "Today") {
      getTrending({ time_window: "day" });
    }
    if (timeTrending === "This Week") {
      getTrending({ time_window: "week" });
    }
  }, [timeTrending]);
  
  // console.log(1)

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
          <i class="fa-solid fa-arrow-right icon-arrow"></i>
        </Button>
      </Collection>

      {/* Trending */}
      <ListHorizontal
        listItemTab={listTimeTrending}
        itemTabActive={timeTrending}
        onClickTab={(time) => setTimeTrending(time)}
        listData = {trendingData}
      />
    </div>
  );
};

export default Home;
