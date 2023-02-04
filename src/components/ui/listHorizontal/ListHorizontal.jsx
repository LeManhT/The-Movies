import React from "react";
import Card from "../card/Card";
import "./listHorizontal.scss";

const ListHorizontal = () => {
  return (
    <div className="list-horizontal">
      <div className="list-horizontal__header">
        <p className="list-horizontal__title">Trending</p>
        <div className="list-horizontal__period">
          <div className="period__first">
            <p>Today</p>
          </div>
          <div className="period__second">
            <p>This Week</p>
          </div>
        </div>
      </div>
      <div className="list-horizontal__content scroll">
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon Babylon Babylon Babylon Babyl Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon Babylon Babylon Babylon Babyl Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon Babylon Babylon Babylon Babyl Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon Babylon Babylon Babylon Babyl Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
        <div className="list-horizontal__item">
          <Card
            width={150}
            height={225}
            image="https://www.themoviedb.org/t/p/w220_and_h330_face/tpHng7ZPa6K2yHJI5aPgHSIPcvx.jpg"
            name="Babylon"
            releaseDate="Jan 15, 2023"
            displayIcon
          />
        </div>
      </div>
    </div>
  );
};

export default ListHorizontal;
