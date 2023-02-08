import React from "react";
import Button from "../../ui/button/Button";
import Collection from "../../ui/collection/Collection";
import Input from "../../ui/input/Input";
import Trending from "./trending/Trending";
import LastestTrailers from "./lastestTrailers/LastestTrailers";
import Popular from "./popular/Popular";
import "./home.scss";
import Leaderboard from "./leaderboard/Leaderboard";
import CollectionJoinToday from "./collectionJoinToday/CollectionJoinToday";
import CollectionWelcome from "./collectionWelcome/CollectionWelcome";

const Home = () => {
  return (
    <div className="homepage">
      {/* Background 1 */}
      <CollectionWelcome />

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
      <Trending />

      {/* Latest Trailers */}
      <LastestTrailers />

      {/* What's Popular */}
      <Popular />

      {/* Background 3 */}
      <CollectionJoinToday />

      {/* Leaderboard */}
      <Leaderboard />
    </div>
  );
};

export default Home;
