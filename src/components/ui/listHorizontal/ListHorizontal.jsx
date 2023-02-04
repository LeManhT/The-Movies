import React from "react";
import Card from "../card/Card";
import "./listHorizontal.scss";

const ListHorizontal = ({
  listItemTab = [],
  onClickTab,
  itemTabActive,
  listData,
}) => {
  return (
    <div className="list-horizontal">
      <div className="list-horizontal__header">
        <p className="list-horizontal__title">Trending</p>
        <div className="list-horizontal__period">
          {listItemTab &&
            listItemTab.map((item, index) => {
              return (
                <div
                  key={index}
                  className="period"
                  onClick={() => onClickTab(item)}
                >
                  <p className={item === itemTabActive ? "active" : ""}>
                    {item}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="list-horizontal__content scroll">
        {listData ? (
          listData.results.map((item) => {
            return (
              <div className="list-horizontal__item" key={item.id}>
                <Card
                  width={150}
                  height={225}
                  image={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  name={item.name || item.title}
                  releaseDate={item.release_date}
                  displayIcon
                  vote={Math.round(item.vote_average * 10)}
                />
              </div>
            );
          })
        ) : (
          <div>Chua co du lieu</div>
        )}
      </div>
    </div>
  );
};

export default ListHorizontal;
