import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Collection from "../../../ui/collection/Collection";
import Input from "../../../ui/input/Input";

const CollectionWelcome = () => {
  const navigate = useNavigate();
  const [textSearch, setTextSearch] = useState("");

  const handleKeyDownInputSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/movie?query=${textSearch}&page=1`);
    }
  };

  return (
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
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
        onKeyDown={handleKeyDownInputSearch}
        onClickBtnSearchInput={() => navigate(`/search?query=${textSearch}`)}
      />
    </Collection>
  );
};

export default CollectionWelcome;
