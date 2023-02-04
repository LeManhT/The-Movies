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
import Card from '../../ui/card/Card'
import Tag from '../../ui/tag/Tag'


const listIcon = [
  "fa-solid fa-list", "fa-solid fa-heart", "fa-solid fa-bookmark", "fa-solid fa-star"
]

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
    <div className="movieDetail__container">
      <div className="movieDetail__head__wrapper">
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
                {
                  listIcon.map((item, index) => {
                    return <li className="toolTip" key={index} title='Add to List'>
                      <ToolTip><i className={item}></i></ToolTip>
                    </li>
                  })
                }

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



      <div className="movieDetail__body__wrapper">
        <div className="movieDetail__body--large">
          <div className="movieDetail__body__left">
            <div className="panel top__billed">
              {
                listIcon.map((item, index) => {
                  return <Card key={index} width={140} image={"https://www.themoviedb.org/t/p/w138_and_h175_face/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg"} name="Sam Worthington" actor={"Jake Sully"} borderRadius="8px" />
                })
              }
            </div>
          </div>

          <div className="movieDetail__body__right">
            <div className="body__right__facts">
              <div className="movieDetail__body__right__social_links">
                {
                  listIcon.map((item, index) => {
                    return <i key={index} style={{ fontSize: "20px", margin: "0px 10px" }} className={item}></i>
                  })
                }
              </div>


              <div className="movieDetail__body__right__cate">
                {
                  listIcon.map((item, index) => {
                    return <Description key={index} title={"Original Title"} desc="Avatar: The Way of Water"></Description>
                  })
                }
              </div>


              <div className="movieDetail__body__right__keywords">
                <div className="keywords__title">
                  <h3>Keywords</h3>
                </div>
                <div className="keywords__list">
                  {
                    listIcon.map((item, index) => {
                      return <Tag key={index} tagContent={"loss of loved one"}></Tag>
                    })
                  }
                </div>
              </div>
            </div>

            <div className="body__right__rate">
              <div className="content__score">
                <Description title="Content Score" desc={"Yes! Looking good!"}>
                  <div className="content__bar--large">
                    <div className="content__bar">
                      <p>100</p>
                    </div>
                  </div>
                </Description>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default MovieDetail