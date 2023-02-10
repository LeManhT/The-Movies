import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../ui/button/Button";
import "./header.scss";

const Header = () => {
  const [displayHeader, setDisplayHeader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.onscroll = (e) => {
      if (e.currentTarget.pageYOffset > 64 || window.scrollY > 64) {
        setDisplayHeader(false);
      } else {
        setDisplayHeader(true);
      }
    };
  }, []);

  return (
    <div
      className="header"
      style={{
        animation: displayHeader
          ? "scrollHeaderUp 0.2s linear"
          : "scrollHeaderDown 0.2s linear forwards",
      }}
    >
      <div className="header__left">
        <div className="item" onClick={() => navigate("/")}>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            width={154}
            height={20}
            alt=""
          />
        </div>
        <div className="item">
          <p>Movies</p>
        </div>
        <div className="item">
          <p>TV Shows</p>
        </div>
        <div className="item">
          <p>People</p>
        </div>
        <div className="item">
          <p>More</p>
        </div>
      </div>
      <div className="header__right">
        <div className="item">
          <i className="fa-solid fa-plus plus-icon"></i>
        </div>
        <div className="item">
          <Button
            styleCss={{
              backgroundColor: "transparent",
              color: "#fff",
              border: "solid 1px #fff",
              borderRadius: "3px",
              padding: "4px 6px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            VI
          </Button>
        </div>
        <div className="item">
          <p>Đăng nhập</p>
        </div>
        <div className="item">
          <p>Tham gia TMDB</p>
        </div>
        <div className="item">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
