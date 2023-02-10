import React from 'react'
import { useEffect, useState } from 'react'
import tmdbApi from '../../../api/tmdbApi'
import useFetch from '../../../hooks/useFetch'
import "./moviedetail.scss"
import { useParams } from 'react-router-dom'
import OverView from './overView/OverView'
import Sidebar from './sidebarRight/Sidebar'
import DetailContent from './detailContent/DetailContent'

const MovieDetail = () => {

  const { info } = useParams();


  const {
    data: movieDetailData,
    error: movieDetailError,
    isLoading,
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
    window.scrollTo(0, 0)
  }, [info])
  // console.log(movieDetailData);
  // console.log(creditsData)
  // console.log(recommendationsData, 40)



  return (
    <div className="movieDetail__container">
      <div className="movieDetail__head__wrapper">
        <OverView creditsData={creditsData} isLoading movieDetailData={movieDetailData}></OverView>
      </div >



      <div className="movieDetail__body__wrapper">
        <div className="movieDetail__body--large">

          <div className="movieDetail__body__left">
            <DetailContent movieDetailData={movieDetailData} creditsData={creditsData} recommendationsData={recommendationsData}></DetailContent>
          </div>

          <div className="movieDetail__body__right">
            <Sidebar movieDetailData={movieDetailData} keywordsData={keywordsData} ></Sidebar>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MovieDetail 