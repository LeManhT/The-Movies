<<<<<<< HEAD
import React from 'react'
import './Card.scss'
const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
                <div className="image__wrapper">
                    <a href="" title='Người Sói Tuổi Teen: Bản Điện Ảnh'></a>
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg" alt="" />
                </div>

                <div className="image__options">
                    <i class="fa-regular fa-comment-dots"></i>
                </div>
            </div>
            <div className="card__content">
                <div className="content__consensus">
                    <div className="outer__ring">
                        <div className="percent">
                            <span>85%</span>
                        </div>
                    </div>
                </div>

                <h2>
                    <a href="" title='Người Sói Tuổi Teen: Bản Điện Ảnh'>Người Sói Tuổi Teen: Bản Điện Ảnh</a>
                </h2>

                <p>Jan 18, 2023</p>
            </div>
=======
import React from "react";
import { CgMoreO } from "react-icons/cg";
import CirclePercent from "../circlePercent/CirclePercent";
import "./card.scss";
const Card = ({ width, height, image, name, releaseDate }) => {
  return (
    <div className="card" style={{ width: `${width}px` }}>
      <div className="card__image" style={{ height: `${height}px` }}>
        <div className="image__wrapper">
          <img src={image} alt="" />
>>>>>>> b442c6c56d1ff3f95b7fe41c9f798436eaafe653
        </div>
        <div className="image__options">
          <CgMoreO />
        </div>
      </div>

      <div className="card__content">
        <div className="content__consensus">
          <CirclePercent
            number="50"
            colorPrimary="#20c876"
            colorSecondary="#1f4429"
          />
        </div>
        <h2>{name}</h2>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
