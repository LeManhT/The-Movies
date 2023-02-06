import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdbApi from "../../../../api/tmdbApi";
import { TRENDING } from "../../../../constants/constants";
import useFetch from "../../../../hooks/useFetch";
import { ToastError } from "../../../../utils/toast";
import Card from "../../../ui/card/Card";
import ListHorizontal from "../../../ui/listHorizontal/ListHorizontal";

const Trending = () => {
  const navigate = useNavigate();
  const [timeTrending, setTimeTrending] = useState(
    TRENDING.listTimeTrending[0]
  );

  const {
    data: trendingData,
    error: trendingError,
    isLoadingTrending,
    fetch: getTrending,
  } = useFetch(tmdbApi.getTrending);

  // get trending
  useEffect(() => {
    if (timeTrending === "Today") {
      getTrending({ time_window: "day" });
    }
    if (timeTrending === "This Week") {
      getTrending({ time_window: "week" });
    }
  }, [timeTrending]);

  const handleClickCardTrending = (item) => {
    if (item.media_type === "movie") {
      navigate(`/movie/${item.id}`);
    } else {
      ToastError("Khong code page TV Detail !!!");
    }
  };

  return (
    <>
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
              <div className="item-card" key={item.id}>
                <Card
                  width={150}
                  heightImage={225}
                  image={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  name={item.name || item.title}
                  description={item.release_date || item.first_air_date}
                  displayIcon
                  vote={Math.round(item.vote_average * 10)}
                  styleCss={{
                    textAlign: "left",
                    paddingContent: "24px 10px 0px 10px",
                    fontSizeName: "16px",
                    fontWeightName: "700",
                    textColorName: "#000",
                    fontSizeDesc: "16px",
                    fontWeightDesc: "400",
                    textColorDesc: "rgba(0,0,0,0.6)",
                  }}
                  displayIconCirclePercent
                  onClickCard={() => handleClickCardTrending(item)}
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

export default Trending;
