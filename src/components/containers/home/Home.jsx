import React, { useEffect } from "react";
import Trending from "./trending/Trending";
import LastestTrailers from "./lastestTrailers/LastestTrailers";
import Popular from "./popular/Popular";
import Leaderboard from "./leaderboard/Leaderboard";
import CollectionJoinToday from "./collectionJoinToday/CollectionJoinToday";
import CollectionWelcome from "./collectionWelcome/CollectionWelcome";
import CollectionRank from "./collectionRank/CollectionRank";
import "./Home.scss";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage">
      <CollectionWelcome />
      <CollectionRank />
      <Trending />
      <LastestTrailers />
      <Popular />
      <CollectionJoinToday />
      <Leaderboard />
    </div>
  );
};

export default Home;
