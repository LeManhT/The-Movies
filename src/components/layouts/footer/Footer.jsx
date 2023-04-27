import React from "react";
import Button from "../../ui/button/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="item">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie Database (TMDB)"
            width={130}
            height={94}
          />
          <div className="item__button">
            <Button
              styleCss={{
                backgroundColor: "#fff",
                color: "#01B4E4",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              JOIN THE COMMUNITY
            </Button>
          </div>
        </div>
        <div className="item">
          <h3>The Basics</h3>
          <div>
            <p>Giới thiệu về TMDB</p>
            <p>Contact Us</p>
            <p>Support Forums</p>
            <p>API</p>
            <p>System Status</p>
          </div>
        </div>
        <div className="item">
          <h3>Get Involved</h3>
          <div>
            <p>Contribution Bible</p>
            <p>Add New Movie</p>
            <p>Add New TV Show</p>
          </div>
        </div>
        <div className="item">
          <h3>Community</h3>
          <div>
            <p>Guidelines</p>
            <p>Discussions</p>
            <p>Leaderboard</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="item">
          <h3>Legal</h3>
          <div>
            <p>Terms of Use</p>
            <p>API Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="footer__section">Build a0bd5b3 (5028)</div>
    </div>
  );
};

export default Footer;
