import React from "react";
import Button from "../../ui/button/Button";
import Collection from "../../ui/collection/Collection";
import Input from "../../ui/input/Input";
import EditLeader from "../../ui/editLeader/EditLeader";
import Trending from "./trending/Trending";
import LastestTrailers from "./lastestTrailers/LastestTrailers";
import Popular from "./popular/Popular";
import "./home.scss";

const Home = () => {
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
      <Trending />

      {/* Latest Trailers */}
      <LastestTrailers />

      {/* What's Popular */}
      <Popular />

      <div className="item_leaderboard">
        <EditLeader
          title="Tung"
          imgAvatar={
            "https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64"
          }
          styleCss={{
            widthDescFirst: "200px",
            backgroundDescFirst:
              "linear-gradient(to right, rgba(var(--tmdbLighterGreen), 1) 0%, rgba(var(--tmdbLightGreen), 1) 100%)",
            widthDescSecond: "390px",
            backgroundDescSecond:
              "linear-gradient(to right, rgba(var(--tmdbLogoOrange), 1) 0%, rgba(var(--tmdbLogoRed), 1) 100%)",
          }}
        />
        <EditLeader
          title="Tung"
          // imgAvatar={
          //   "https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64"
          // }
          styleCss={{
            widthDescFirst: "200px",
            backgroundDescFirst:
              "linear-gradient(to right, rgba(var(--tmdbLighterGreen), 1) 0%, rgba(var(--tmdbLightGreen), 1) 100%)",
            widthDescSecond: "390px",
            backgroundDescSecond:
              "linear-gradient(to right, rgba(var(--tmdbLogoOrange), 1) 0%, rgba(var(--tmdbLogoRed), 1) 100%)",
          }}
        />
        <EditLeader
          title="Tung"
          imgAvatar={
            "https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64"
          }
        />
      </div>
    </div>
  );
};

export default Home;
