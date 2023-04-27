import React from 'react'
import Button from '../../../ui/button/Button'
import Collection from '../../../ui/collection/Collection'
import i18next from 'i18next'

const CollectionRank = () => {
  return (
    <Collection
        collection={{
          title: i18next.t('collection.wrap'),
          desc: i18next.t('collection.desc'),
        }}
        styleCss={{
          backgroundImage:
            "https://image.tmdb.org/t/p/w1920_and_h600_multi_faces/rGbRnRvkmrSub07ty89Vnlsh6UX.jpg",
          widthTitle: "354px",
          fontSizeTitle: "70px",
          fontWeightTitle: "700",
          lineHeightTitle: "70px",
          fontSizeDesc: "20px",
          fontWeightDesc: "500",
          marginTopOther: "14px",
          widthOther: "100%",
          widthDivideBar: "34%",
          marginDivideBar: "8px 0",
        }}
        divideBar
      >
        <Button
          styleCss={{
            backgroundColor: "transparent",
            color: "#fff",
            border: "2px solid #fff",
            borderRadius: "20px",
            padding: "10px 18px",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
         {i18next.t('collection.btn')}
          <i className="fa-solid fa-arrow-right icon-arrow"></i>
        </Button>
      </Collection>
  )
}

export default CollectionRank