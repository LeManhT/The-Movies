import React from 'react'
import { useEffect } from 'react'
import tmdbApi from '../../../api/tmdbApi'
import useFetch from '../../../hooks/useFetch'
import "./moviedetail.scss"
import CirclePercent from '../../ui/circlePercent/CirclePercent'
import ToolTip from '../../ui/iconToolTip/ToolTip'
import Description from '../../ui/description/Description'
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
              <div className="movieDetail__facts">
                <span className="certifications">
                  PG-13
                </span>
                <span className="release">12/16/2022 (US)</span>
                <span className="genres">
                  <span>Phim Khoa Học Viễn Tưởng</span>
                  <span>Phim Phiêu Lưu</span>
                  <span>Phim Hành Động</span>
                </span>
              </div>
              <span className="runtime">3h 12m</span>
            </div>

            <ul className="movieDetail__auto__action">
              <li className="chart">
                <div className="consensus__detail">
                  <CirclePercent number={77} />
                </div>
                <div className="text">
                  User Score
                </div>
              </li>

              <li className="toolTip">
                <ToolTip><i class="fa-solid fa-list"></i></ToolTip>
              </li>

              <li className="toolTip">
                <ToolTip><i class="fa-solid fa-list"></i></ToolTip>
              </li>

              <li className="toolTip">
                <ToolTip><i class="fa-solid fa-list"></i></ToolTip>
              </li>

              <li className="toolTip">
                <ToolTip><i class="fa-solid fa-list"></i></ToolTip>
              </li>

              <li className="preview__video">
                <i class="fa-solid fa-play"></i>
                <span>Play Trailer</span>
              </li>
            </ul>

            <div className="movieDetail__intro__content">
              <h3 className="tagline">
                Return to Pandora.
              </h3>

              <div className="movieDetail__intro__overview">
                <Description title={"Overview"} desc="Câu chuyện của “Avatar: Dòng Chảy Của Nước” lấy bối cảnh 10 năm sau những sự kiện xảy ra ở phần đầu tiên. Phim kể câu chuyện về gia đình mới của Jake Sully (Sam Worthington thủ vai) cùng những rắc rối theo sau và bi kịch họ phải chịu đựng khi phe loài người xâm lược hành tinh Pandora."></Description>
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
    </div>
  )
}

export default MovieDetail