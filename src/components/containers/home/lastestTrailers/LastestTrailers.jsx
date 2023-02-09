import React, { useEffect, useState } from "react";
import tmdbApi from "../../../../api/tmdbApi";
import { LASTEST_TRAILERS } from "../../../../constants/constants";
import useFetch from "../../../../hooks/useFetch";
import Card from "../../../ui/card/Card";
import ListHorizontal from "../../../ui/listHorizontal/ListHorizontal";
import Loading from "../../../ui/loading/Loading";
import ModalPreview from "../../../ui/modalVideo/ModalPreview";

const LastestTrailers = () => {
  const [categoryTrailers, setCategoryTrailers] = useState(
    LASTEST_TRAILERS.listCategory[0]
  );
  const [backgroundImgTrailers, setBackgroundImgTrailers] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const {
    data: topRatedData,
    error: topRatedError,
    isLoading: isLoadingTopRated,
    fetch: getTopRated,
  } = useFetch(tmdbApi.getTopRated);

  const {
    data: videosData,
    // error: videosError,
    // isLoading: isLoadingVideos,
    fetch: getVideo,
  } = useFetch(tmdbApi.getVideosMovie);

  // get trailers
  useEffect(() => {
    if (categoryTrailers === "On TV") {
      getTopRated({ category: "tv", page: 1 });
    }
    if (categoryTrailers === "In Theaters") {
      getTopRated({ category: "movie", page: 1 });
    }
  }, [categoryTrailers]);

  const handleClickCardTrailer = (item) => {
    // get videos
    getVideo({ movie_id: item.id });
    setIsModal(true);
  };

  const handleHoverCardTrailers = (item) => {
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
        {isLoadingTopRated ? (
          <Loading heightBlock="270px" />
        ) : topRatedError ? (
          <div className="list-error">{topRatedError.status_message}</div>
        ) : topRatedData ? (
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
                  onClickCard={() => handleClickCardTrailer(item)}
                  onHoverCard={() => handleHoverCardTrailers(item)}
                />
              </div>
            );
          })
        ) : (
          <div className="list-empty">Chua co du lieu</div>
        )}
      </ListHorizontal>
      <ModalPreview
        keyVideo={videosData?.results[0]?.key || "3B3OGKB7VNI"}
        isOpen={isModal}
        onClose={() => setIsModal(false)}
      />
    </>
  );
};

export default LastestTrailers;
