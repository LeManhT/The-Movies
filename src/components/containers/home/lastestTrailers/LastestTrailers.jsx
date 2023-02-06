import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdbApi from "../../../../api/tmdbApi";
import { LASTEST_TRAILERS } from "../../../../constants/constants";
import useFetch from "../../../../hooks/useFetch";
import Card from "../../../ui/card/Card";
import ListHorizontal from "../../../ui/listHorizontal/ListHorizontal";

const LastestTrailers = () => {
  //   const navigate = useNavigate();
  const [categoryTrailers, setCategoryTrailers] = useState(
    LASTEST_TRAILERS.listCategory[0]
    );
    const [backgroundImgTrailers, setBackgroundImgTrailers] = useState(null);

  const {
    data: topRatedData,
    error: topRatedError,
    isLoadingTopRated,
    fetch: getTopRated,
  } = useFetch(tmdbApi.getTopRated);

  // get trailers
  useEffect(() => {
    if (categoryTrailers === "On TV") {
      getTopRated({ category: "tv", page: 1 });
    }
    if (categoryTrailers === "In Theaters") {
      getTopRated({ category: "movie", page: 1 });
    }
  }, [categoryTrailers]);

  const handleHoverCardTrailers = (item) => {
    // console.log(item.backdrop_path)
    setBackgroundImgTrailers(item.backdrop_path);
  };

  return (
    <>
      <ListHorizontal
        titleTab={LASTEST_TRAILERS.title}
        listItemTab={LASTEST_TRAILERS.listCategory}
        itemTabActive={categoryTrailers}
        onClickTab={(category) => setCategoryTrailers(category)}
        styleCssTabPrimary={{
          backgroundImage: backgroundImgTrailers
            ? `https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${backgroundImgTrailers}`
            : "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/hUtrCoGrlo3o8juAI1ZzA7F1LX9.jpg",
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
              <div className="item-card" key={item.id}>
                <Card
                  width={300}
                  heightImage={168}
                  image={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`}
                  name={item.name || item.title}
                  description="Official Trailer"
                  styleCss={{
                    textAlign: "center",
                    paddingContent: "24px 10px 0px 10px",
                    fontSizeName: "20px",
                    fontWeightName: "600",
                    textColorName: "#fff",
                    fontSizeDesc: "16px",
                    fontWeightDesc: "400",
                    textColorDesc: "#fff",
                  }}
                  displayIconPlay
                  // onClickCard={() => handleClickCardPoster(item)}
                  onHoverCard={() => handleHoverCardTrailers(item)}
                />
              </div>
            );
          })
        ) : (
          <div>Chua co du lieu</div>
        )}
      </ListHorizontal>
    </>
  );
};

export default LastestTrailers;
