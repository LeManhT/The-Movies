import React from 'react'
import { useEffect } from 'react'
import tmdbApi from '../../../api/tmdbApi'
import useFetch from '../../../hooks/useFetch'
import "./moviedetail.scss"

const MovieDetail = () => {
  const {
    data: movieDetailData,
    error: movieDetailError,
    isLoading,
    fetch,
  } = useFetch(tmdbApi.getMovieDetail);
  useEffect(() => {
    fetch({ movie_id: 76600 });
  }, [])
  console.log(movieDetailData);

  return (
    <div className="movieDetail__wrapper">
      <div className="movieDetail__content--large">
        <div className="movieDetail__content">
          <div className="movieDetail__poster__wrapper">
            <div className="movieDetail__poster">
              <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jGmC7aMqoLU0ALRKHkz3pQVV1pg.jpg" alt="" />
            </div>
          </div>

          <div className="movieDetail__intro__wrapper">
            <div className="movieDetail__intro">
              <div className="movieDetail__title">
                <h2>Avatar:  Dòng Chảy Của Nước
                  <span className='release__date'>(2022)</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail