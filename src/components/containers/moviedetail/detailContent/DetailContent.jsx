import React, { useEffect, useState } from 'react'
import Card from '../../../ui/card/Card'
import ListCard from '../../../ui/listCard/ListCard'
import Discussion from '../../../ui/discussion/Discussion'
import './detailContent.scss'
import Collection from '../../../ui/collection/Collection'
import Button from '../../../ui/button/Button'
import useFetch from '../../../../hooks/useFetch'
import tmdbApi from '../../../../api/tmdbApi'
import ListHorizontal from '../../../ui/listHorizontal/ListHorizontal'

const DetailContent = ({ listIcon, creditsData, recommendationsData, listImage }) => {
    const {
        data: listMediaData,
        error: listMediaErr,
        fetch: getListMedia
    } = useFetch(tmdbApi.getTrending);

    const [isScroll, setIsScroll] = useState(false);
    const [scrollTop, setScrollTop] = useState(0)
    const handleScroll = (e) => {
        setIsScroll(!isScroll);
        setScrollTop(Math.floor(e.currentTarget.scrollLeft))
    }
    const [activeTab, setActiveTab] = useState("Review")
    const [end, setEnd] = useState(15)
    const handleClickTab = (item) => {
        setActiveTab(item)
    }

    const generateData = () => {
        setEnd((pre) => pre + 15)
    }

    return (
        <>
            <div className="panel top__billed" >
                <ListCard handleScroll={handleScroll} scrollTop={scrollTop} title={"Top Billed Cast"} gap={"15px"} fontSize="1.4em" fontWeight={"600"}>
                    {
                        creditsData?.cast.slice(0, end).map((credit, index) => {
                            return <div key={index} className="card__item">
                                <Card width={140} styleCss={{
                                    fontSizeName: "16px",
                                    fontWeightName: "700",
                                    paddingContent: "10px",
                                    fontSizeDesc: "15px",
                                    fontWeightDesc: "400"
                                }} image={`https://www.themoviedb.org/t/p/w138_and_h175_face${credit.profile_path}`} name={credit.name} description={credit.character} borderRadius="8px" />
                            </div>
                        })
                    }
                    {end <= creditsData?.cast.length ? <div className="viewMore" onClick={() => { generateData() }}>
                        <p>
                            <span>View More</span>
                            <span class="icon__view--more arrow-thin-right"></span>
                        </p>
                    </div> : null}
                </ListCard>

                <div className="top__billed__btn">
                    <p>Full Cast & Crew</p>
                </div>
            </div>

            <div className="social__panel">
                <div className="review">

                    <ListHorizontal titleTab={"Social"} isTabBorderBottom styleCssTabPrimary={{ textColor: "#000", borderBottom: "3px solid #000" }} listItemTab={["Review", "Discussions"]} itemTabActive={activeTab} onClickTab={handleClickTab}>

                        {/* Tabs */}
                        <div className="review__content">
                            {activeTab === "Review" ? "We don't have any reviews for Avatar: Dòng Chảy Của Nước. Would you like to write one?" :
                                listIcon?.map((index) => {
                                    return <div key={index} className="item__discussion">
                                        <Discussion img={"https://www.themoviedb.org/t/p/w45_and_h45_face/qZW7TazXYrGysGBgO6ygeAaC4WO.jpg"} link={"Sequel snubbed at the Oscars 2023?"} status={"Open"} count={0}></Discussion>
                                    </div>
                                })
                            }

                        </div>
                    </ListHorizontal>
                    <div className="discussion__btn">
                        <p>Go to Discussions</p>
                    </div>
                </div>
            </div>


            <div className="social__scroller">

                <ListCard></ListCard>
            </div>


            <div className="collection">
                <Collection styleCss={{
                    backgroundImage: "https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg", fontSizeTitle: "1.9em", fontWeightTitle: 600,
                    justCenter: "center"
                }}
                    collection={{ title: "Part of the Loạt phim Avatar", desc: "Includes Avatar, Avatar: Dòng Chảy Của Nước, Avatar 3, Avatar 4, and Avatar 5" }}>
                    <div className="collection__btn">
                        <Button styleCss={{
                            borderRadius: "20px", backgroundColor: "#000",
                            color: "#fff", padding: "6px 20px", fontWeight: 700
                        }} ><span>VIEW THE COLLECTION</span></Button>
                    </div>
                </Collection>
            </div>


            <div className="hr" style={{ 'height': '1px', width: "100%", backgroundColor: "#ccc", margin: "20px 0" }}>
            </div>

            <div className="recommendations">
                <ListCard title={"Recommendations"} gap={"15px"} fontSize="1.4em" fontWeight={"600"}>
                    {
                        recommendationsData?.results.slice(0, 15).map((recommendation, index) => {
                            return <div key={index} className="item__recommendation">
                                <Card width={250} styleCss={{
                                    fontSizeName: "16px",
                                    fontWeightName: "700",
                                    paddingContent: "10px",
                                    fontSizeDesc: "15px",
                                    fontWeightDesc: "400"
                                }} image={`https://www.themoviedb.org/t/p/w250_and_h141_face${recommendation.poster_path}`} description={recommendation.original_title} borderRadius="8px" isRecommendation vote_average={`${Math.round(recommendation.vote_average * 10)}%`} />

                                <div class="meta">
                                    <span class="release_date"><span><i className="fa-regular fa-calendar-days"></i></span> 11/09/2022</span>
                                    <div className="listIcon">
                                        {
                                            listImage.map((icon, index) => {
                                                return <span class="icon" style={{ backgroundImage: `url(${icon})` }}></span>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        })
                    }

                </ListCard>
            </div>
        </>
    )
}

export default DetailContent