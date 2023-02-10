import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tmdbApi from "../../../../api/tmdbApi";
import { POPULAR } from "../../../../constants/constants";
import useFetch from "../../../../hooks/useFetch";
import { ToastError } from "../../../../utils/toast";
import Card from "../../../ui/card/Card";
import ListHorizontal from "../../../ui/listHorizontal/ListHorizontal";
import Loading from "../../../ui/loading/Loading";

const Popular = () => {
  const navigate = useNavigate();

  const [categoryPopular, setCategoryPopular] = useState(
    POPULAR.listCategory[0]
  );

  const {
    data: popularData,
    error: popularError,
    isLoading: isLoadingPopular,
    fetch: getPopular,
  } = useFetch(tmdbApi.getPopular);

  // useEffect(() => {
  //   const getTotalsPagePopular = async () => {
  //     try {
  //       const data = await Promise.all([
  //         tmdbApi.getPopular({ category: "tv"}),
  //         tmdbApi.getPopular({ category: "movie"}),
  //       ]);
  //       const totalPages = await data.map((item) => item.total_pages);
  //       console.log(totalPages)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getTotalsPagePopular();
  // }, []);

  // get popular
  useEffect(() => {
    if (categoryPopular === "On TV") {
      getPopular({ category: "tv", page: 1 });
    }
    if (categoryPopular === "In Theaters") {
      getPopular({ category: "movie", page: 1 });
    }
  }, [categoryPopular]);

  const handleClickCardPopular = (item) => {
    item.release_date
      ? navigate(`/movie/${item.id}`)
      : ToastError("Khong code page TV Detail !!!");
  };

  return (
    <>
      <ListHorizontal
        titleTab={POPULAR.title}
        listItemTab={POPULAR.listCategory}
        itemTabActive={categoryPopular}
        onClickTab={(category) => setCategoryPopular(category)}
        styleCssTabPrimary={{
          colorTitle: "#000",
          borderMain: "1px solid rgba(var(--tmdbDarkBlue), 1)",
          textColor: "rgba(var(--tmdbDarkBlue), 1)",
          backgroundColor: "transparent",
          textColorActive: "#a6efc4",
          backgroundColorActive: "rgba(var(--tmdbDarkBlue), 1)",
        }}
      >
        {isLoadingPopular ? (
          <Loading heightBlock="310px" />
        ) : popularError ? (
          <div className="list-error">{popularError.status_message}</div>
        ) : popularData ? (
          popularData.results.map((item) => {
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
                  onClickCard={() => handleClickCardPopular(item)}
                />
              </div>
            );
          })
        ) : (
          <div className="list-error">Chua co du lieu</div>
        )}
      </ListHorizontal>
    </>
  );
};

export default Popular;
