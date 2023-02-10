import React, { useState } from 'react'
import CirclePercent from '../../../ui/circlePercent/CirclePercent'
import ToolTip from '../../../ui/iconToolTip/ToolTip'
import Description from '../../../ui/description/Description'
import { toHoursAndMinutes } from '../../../../utils/common'
import ModalPreview from '../../../ui/modalVideo/ModalPreview'
import './overview.scss'
import { LIST_ICON } from '../../../../constants/constants'
import SkeletonContainer from '../../../ui/skeleton/SkeletonContainer'


const OverView = ({ movieDetailData, creditsData }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="movieDetail__content--large">
            <div className="movieDetail__content">
                <div className="movieDetail__poster__wrapper">

                    <div className="movieDetail__poster">
                        <img src={movieDetailData?.poster_path || movieDetailData?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetailData?.poster_path || movieDetailData?.backdrop_path}` : "https://tuyendung.edutalk.edu.vn/images/default.jpg"} alt="" />
                        <div className="zoom">
                            <p href="#" className="no_click"><span className="zoom_fullscreen white"></span> Expand</p>
                        </div>
                    </div>

                </div>

                <div className="movieDetail__intro__wrapper">
                    <div className="movieDetail__intro">
                        <div className="movieDetail__title">
                            {movieDetailData?.original_title ? <h2>{movieDetailData?.original_title}
                                <span className='release__date'>{`(${movieDetailData?.release_date.slice(0, 4)})`}</span>
                            </h2> : <SkeletonContainer count={1} width={'50%'} height={20} />}

                        </div>

                        {
                            movieDetailData?.genres ?
                                <div className="movieDetail__facts">
                                    <span className="certifications">
                                        PG-13
                                    </span>
                                    <span className="release">{movieDetailData?.release_date} {(movieDetailData?.production_companies[0].origin_country)}</span>
                                    <span className="genres">
                                        {movieDetailData?.genres.map((genre) => {
                                            return <span key={genre?.id}>{genre.name + ", "}</span>
                                        })}
                                    </span>
                                    <span className="runtime">{toHoursAndMinutes(movieDetailData?.runtime).hours + 'h ' + toHoursAndMinutes(movieDetailData?.runtime).minutes}</span>
                                </div> : <SkeletonContainer width={"80%"} height={20} />
                        }

                    </div>

                    {
                        movieDetailData ?
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
                                    LIST_ICON.map((item, index) => {
                                        return <li className="toolTip" key={index} title='Add to List'>
                                            <ToolTip><i className={item}></i></ToolTip>
                                        </li>
                                    })
                                }

                                <li className="preview__video">
                                    <i className="fa-solid fa-play"></i>
                                    <span className="btn-primary" style={{ "fontWeight": "500" }} onClick={() => { setIsOpen(true) }}>Play Trailer</span>
                                </li>
                            </ul> : <SkeletonContainer width={"80%"} height={40} />
                    }


                    <div className="movieDetail__intro__content">
                        <h3 className="tagline">
                            {movieDetailData?.tagline || <SkeletonContainer width={"40%"} />}
                        </h3>
                        {
                            movieDetailData?.overview ? <div className="movieDetail__intro__overview">
                                <Description title={"Overview"} desc={movieDetailData?.overview} style={{ fontSize: "20px" }}></Description>
                            </div> : <SkeletonContainer height={100} />
                        }



                        <div className="listAuthor">
                            {
                                creditsData?.cast.slice(0, 5).map((credit, index) => {
                                    return <>
                                        {
                                            credit ? <Description key={index} title={credit?.name} desc="Characters, Director, Screenplay, Story"></Description> : <SkeletonContainer height={20} />
                                        }
                                    </>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <ModalPreview isOpen={isOpen} onClose={() => setIsOpen(false)} keyVideo={movieDetailData?.videos.results[0]?.key || ""} ></ModalPreview>
        </div>
    )
}

export default OverView