import React from "react";
import Button from "../../ui/button/Button";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer_single_column">
        <div className="nav">
          <div className="join">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="The Movie Database (TMDB)"
              width="130"
              height="94"
            />
            <div className="wrapper">
              <Button
                // width={120}
                // height={40}
                background="#ffff"
                color="#01B4E4"
                borderRadius="4px"
                padding="10px 20px"
                fontSize="15px"
                fontWeight="bold"
              >
                Hi! Hongnt
              </Button>
            </div>
          </div>
          <div className="item">
            <h3>The Basics</h3>
            <ul>
              <li>
                <p>Giới thiệu về TMDB</p>
              </li>
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Support Forums</p>
              </li>
              <li>
                <p>API</p>
              </li>
              <li>
                <p>System Status</p>
              </li>
            </ul>
          </div>
          <div className="item">
            <h3>Get Involved</h3>
            <ul>
              <li>
                <p>
                  <span class="glyphicons glyphicons-asterisk"></span>{" "}
                  Contribution Bible
                </p>
              </li>
              <li>
                <p>Add New Movie</p>
              </li>
              <li>
                <p>Add New TV Show</p>
              </li>
            </ul>
          </div>
          <div className="item">
            <h3>Community</h3>
            <ul>
              <li>
                <p>Guidelines</p>
              </li>
              <li>
                <p>Discussions</p>
              </li>
              <li>
                <p>Leaderboard</p>
              </li>
              <li>
                <p>Twitter</p>
              </li>
            </ul>
          </div>
          <div className="item">
            <h3>Legal</h3>
            <ul>
              <li>
                <p>Terms of Use</p>
              </li>
              <li>
                <p>API Terms of Use</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">Build a0bd5b3 (5028)</div>
      </div>
    </div>
  );
};

export default Footer;
