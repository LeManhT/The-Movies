import React from 'react'
import { useEffect, useState } from 'react'
import tmdbApi from '../../../api/tmdbApi'
import useFetch from '../../../hooks/useFetch'
import "./moviedetail.scss"
import CirclePercent from '../../ui/circlePercent/CirclePercent'
import ToolTip from '../../ui/iconToolTip/ToolTip'
import Description from '../../ui/description/Description'
import { useParams } from 'react-router-dom'
import { toHoursAndMinutes } from '../../../utils/common'
import ModalPreview from '../../ui/modalVideo/ModalPreview'

const MovieDetail = () => {
  const {
    data: movieDetailData,
    error: movieDetailError,
    isLoading,
    fetch,
  } = useFetch(tmdbApi.getMovieDetail);

  const { info } = useParams();

  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    fetch({ movie_id: info, category: 'videos' });
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
                <h2>{movieDetailData?.original_title}
                  <span className='release__date'>(2022)</span>
                </h2>
              </div>
              <div className="movieDetail__facts">
                <span className="certifications">
                  PG-13
                </span>
                <span className="release">12/16/2022 (US), </span>
                <span className="genres">
                  {movieDetailData?.genres.map((genre) => {
                    return <span key={genre.id}>{genre.name + ", "}</span>
                  })}
                </span>
                <span className="runtime">{toHoursAndMinutes(movieDetailData?.runtime).hours + 'h ' + toHoursAndMinutes(movieDetailData?.runtime).minutes}</span>
              </div>
            </div>

            <ul className="movieDetail__auto__action">
              <li className="chart">
                <div className="consensus__detail">
                  <CirclePercent number={Math.round(movieDetailData?.vote_average * 10)} />
                </div>
                <div className="text">
                  User <br /> Score
                </div>
              </li>

              <li className="toolTip" title='Add to List'>
                <ToolTip><i className="fa-solid fa-list"></i></ToolTip>
              </li>

              <li className="toolTip" title='Mark a favorite' >
                <ToolTip><i className="fa-solid fa-heart"></i></ToolTip>
              </li>

              <li className="toolTip" title='Add to your Watch List'>
                <ToolTip><i className="fa-solid fa-bookmark"></i></ToolTip>
              </li>

              <li className="toolTip" title='Rate it'>
                <ToolTip><i className="fa-solid fa-star"></i></ToolTip>
              </li>

              <li className="preview__video">
                <i className="fa-solid fa-play"></i>
                <ModalPreview isOpen={isOpen} onClose={() => setIsOpen(false)} keyVideo={movieDetailData?.videos.results[0].key} >
                  <span className="btn-primary" style={{ "fontWeight": "500" }} onClick={() => { setIsOpen(true) }}>Play Trailer</span>
                </ModalPreview>
              </li>
            </ul>

            <div className="movieDetail__intro__content">
              <h3 className="tagline">
                {movieDetailData?.tagline}
              </h3>

              <div className="movieDetail__intro__overview">
                <Description title={"Overview"} desc={movieDetailData?.overview} style={{ fontSize: "20px" }}></Description>
              </div>


              <div className="listAuthor">
                <Description title="James Cameron" desc="Characters, Director, Screenplay, Story"></Description>
                <Description title="James Cameron" desc="Characters, Director, Screenplay, Story"></Description>
                <Description title="James Cameron" desc="Characters, Director, Screenplay, Story"></Description>
                <Description title="James Cameron" desc="Characters, Director, Screenplay, Story"></Description>
                <Description title="James Cameron" desc="Characters, Director, Screenplay, Story"></Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default MovieDetail