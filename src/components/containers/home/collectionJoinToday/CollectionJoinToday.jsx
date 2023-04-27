import React from "react";
import Button from "../../../ui/button/Button";
import Collection from "../../../ui/collection/Collection";
import "./collectionJoinToday.scss";
import i18next from "i18next";

const CollectionJoinToday = () => {
  return (
    <>
      <Collection
        collection={{
          title: "Join Today",
        }}
        styleCss={{
          backgroundImage:
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg",
          fontSizeTitle: "32px",
          fontWeightTitle: "700",
          lineHeightTitle: "40px",
          marginTopOther: "20px",
          widthOther: "100%",
        }}
      >
        <div className="joinToday__content">
          <div className="joinToday__content-left">
            <p>
              Get access to maintain your own <em>custom personal lists</em>,{" "}
              <em>track what you've seen</em> and search and filter for{" "}
              <em>what to watch next</em>—regardless if it's in theatres, on TV
              or available on popular streaming services like .
            </p>
            <Button
              styleCss={{
                backgroundColor: "rgba(var(--accountPurple), 1)",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "10px 16px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Sign Up
            </Button>
          </div>
          <div className="joinToday__content-right">
            <ul>
              <li>{i18next.t('collection.join_enjoy')}</li>
              <li>{i18next.t('collection.join_maintain')}</li>
              <li>
              {i18next.t('collection.join_filter')}
              </li>
              <li>
              {i18next.t('collection.join_log')}
              </li>
              <li> {i18next.t('collection.join_build')}</li>
              <li> {i18next.t('collection.join_contribute')}</li>
            </ul>
          </div>
        </div>
      </Collection>
    </>
  );
};

export default CollectionJoinToday;
