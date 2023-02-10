import React from "react";
import { dataLeaderboard } from "../../../../constants/constants";
import EditLeader from "../../../ui/editLeader/EditLeader";
import "./leaderboard.scss";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="header__leaderboard">
        <p className="title__leaderboard">Leaderboard</p>
        <div className="content-title__leaderboard">
          <div className="desc-title__leaderboard">
            <span
              className="desc-first"
              style={{
                background:
                  "linear-gradient(to right, rgba(var(--tmdbLighterGreen), 1) 0%, rgba(var(--tmdbLightGreen), 1) 100%)",
              }}
            />
            <p>All Time Edits</p>
          </div>
          <div className="desc-title__leaderboard">
            <span
              className="desc-first"
              style={{
                background:
                  "linear-gradient(to right, rgba(var(--tmdbLogoOrange), 1) 0%, rgba(var(--tmdbLogoRed), 1) 100%)",
              }}
            />
            <p>Edits This Week</p>
          </div>
        </div>
      </div>
      <div className="list__leaderboard">
        {dataLeaderboard &&
          dataLeaderboard.map((item) => {
            return (
              <EditLeader
                key={item.id}
                title={item.title}
                imgAvatar={item.imgAvatar}
                countAllTime={item.countAllTime}
                countThisWeek={item.countThisWeek}
                styleCss={{
                  widthDescFirst: item.style.widthAllTime,
                  backgroundDescFirst:
                    "linear-gradient(to right, rgba(var(--tmdbLighterGreen), 1) 0%, rgba(var(--tmdbLightGreen), 1) 100%)",
                  widthDescSecond: item.style.widthThisWeek,
                  backgroundDescSecond:
                    "linear-gradient(to right, rgba(var(--tmdbLogoOrange), 1) 0%, rgba(var(--tmdbLogoRed), 1) 100%)",
                }}
                isMeter
              />
            );
          })}
      </div>
    </div>
  );
};

export default Leaderboard;
