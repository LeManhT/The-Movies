import React from 'react'
import { useEffect, useState } from 'react'
import tmdbApi from '../../../api/tmdbApi'
import useFetch from '../../../hooks/useFetch'
import "./moviedetail.scss"
import { useParams } from 'react-router-dom'
import OverView from './overView/OverView'
import Sidebar from './sidebarRight/Sidebar'
import DetailContent from './detailContent/DetailContent'

const listIcon = [
  "fa-solid fa-list", "fa-solid fa-heart", "fa-solid fa-bookmark", "fa-solid fa-star"
]

const listImage = [
  "https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg",
  "https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg",
  "https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg",
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-351-link-5f643a86c2515cb06ea08ebc798941824f76bbcea4ed571222a81f271b30c7f3.svg"
]

const listCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const MovieDetail = () => {



  const { info } = useParams();


  const {
    data: movieDetailData,
    error: movieDetailError,
    fetch,
  } = useFetch(tmdbApi.getMovieDetail);

  const {
    data: creditsData,
    error: creditsError,
    fetch: getCredits,
  } = useFetch(tmdbApi.getMovieCredits);



  const {
    data: keywordsData,
    error: keywordsErr,
    fetch: getKeywords
  } = useFetch(tmdbApi.getMovieKeywords);


  const {
    data: recommendationsData,
    error: recommendationsErr,
    fetch: getRecommend
  } = useFetch(tmdbApi.getRecommendations);

  useEffect(() => {
    fetch({ movie_id: info });
    getCredits({ movie_id: info });
    getKeywords({ movie_id: info });
    getRecommend({ movie_id: info });
  }, [])
  // console.log(movieDetailData);
  // console.log(recommendationsData, 40)



  return (
    <div className="movieDetail__container">
      <div className="movieDetail__head__wrapper">
        <OverView listIcon={listIcon} movieDetailData={movieDetailData}></OverView>
      </div >



      <div className="movieDetail__body__wrapper">
        <div className="movieDetail__body--large">

          <div className="movieDetail__body__left">
            <DetailContent creditsData={creditsData} listCard={listCard} listImage={listImage} listIcon={listIcon} recommendationsData={recommendationsData}></DetailContent>
          </div>

          <div className="movieDetail__body__right">
            <Sidebar movieDetailData={movieDetailData} keywordsData={keywordsData} listImage={listImage} ></Sidebar>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MovieDetail 