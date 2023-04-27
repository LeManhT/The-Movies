import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../ui/button/Button";
import "./Header.scss";
import { Link } from "react-router-dom";
import CustomizedTooltips from "../../ui/tooltip/ToolTip";
import SelectOption from "../../ui/selectOption/SelectOption";
import { LANGUAGE } from "../../../constants/constants";
import { useTranslation } from "react-i18next";
import DropDown from '../../ui/dropDown/DropDown'

const Header = () => {
  const [displayHeader, setDisplayHeader] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const language = window.localStorage.getItem('i18nextLng')

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
          <p>{t('Movies')}</p>
          <DropDown color={'black'}>{['Popular','Now Playing', 'Upcoming', 'Top Rated']}</DropDown>
        </div>
        <div className="item">
          <p>{t('TV_Shows')}</p>
          <DropDown color={'black'}>{['Popular','Airing Today', 'On TV', 'Top Rated']}</DropDown>
        </div>
        <div className="item">
          <p>{t('People')}</p>
          <DropDown color={'black'}>{['Popular People']}</DropDown>
        </div>
        <div className="item">
          <p>{t('More')}</p>
          <DropDown color={'black'}>{['Discussion','Support']}</DropDown>
        </div>
      </div>
      <div className="header__right">
        <div className="item">
          <CustomizedTooltips toolTipTitle = {"Can't find a movie or TV show? Login to create it."}>
            <i className="fa-solid fa-plus plus-icon"></i>
          </CustomizedTooltips>
        </div>
        <div className="item">
          <CustomizedTooltips toolTipTitle={<SelectOption listOptionItem={LANGUAGE} label={"Language"}></SelectOption>}>
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
            {language.toUpperCase()}
          </Button>
          </CustomizedTooltips>
        </div>
        <div className="item">
          <Link to={"/login"}>{t('Login')}</Link>
        </div>
        <div className="item">
          <Link to={"/signup"}>{t('Join_TMDB')}</Link>
        </div>
        <div className="item">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
