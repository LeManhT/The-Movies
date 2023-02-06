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

const listCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const MovieDetail = () => {
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

  const { info } = useParams();




  useEffect(() => {
    fetch({ movie_id: info, category: 'videos' });
    getCredits({ movie_id: info })
  }, [])
  // console.log(movieDetailData);
  console.log(creditsData, 40)



  return (
    <div className="movieDetail__container">
      <div className="movieDetail__head__wrapper">
        <OverView listIcon={listIcon} movieDetailData={movieDetailData}></OverView>
      </div >



      <div className="movieDetail__body__wrapper">
        <div className="movieDetail__body--large">

          <div className="movieDetail__body__left">
            <DetailContent creditsData={creditsData} listCard={listCard} listIcon={listIcon}></DetailContent>
          </div>

          <div className="movieDetail__body__right">
            <Sidebar listIcon={listIcon} ></Sidebar>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MovieDetail 