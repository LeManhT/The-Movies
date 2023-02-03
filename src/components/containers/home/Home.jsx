import React from "react";
import Collection from "../../ui/collection/Collection";
import "./home.scss";

const Home = () => {
  return (
    <div className="homepage">
      <Collection
        styleCss={{
          backgroundImage:
            "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/fgYfch0MGfNEpgzPst49ThKUqA4.jpg",
          fontSizeTitle: "3em",
          fontWeightTitle: "700",
          fontSizeDesc: "2em",
          fontWeightDesc: "600",
        }}
        collection={{
          title: "Welcome.",
          desc: "Millions of movies, TV shows and people to discover. Explore now.",
        }}
      ></Collection>
    </div>
  );
};

export default Home;
