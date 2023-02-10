import React, { useEffect, useState } from 'react'
import Card from '../../../ui/card/Card'
import ListCard from '../../../ui/listCard/ListCard'
import Discussion from '../../../ui/discussion/Discussion'
import './detailContent.scss'
import Collection from '../../../ui/collection/Collection'
import Button from '../../../ui/button/Button'
import ListHorizontal from '../../../ui/listHorizontal/ListHorizontal'
import { LIST_IMAGE, LIST_MEDIA, LIST_ICON } from '../../../../constants/constants'
import ModalPreview from '../../../ui/modalVideo/ModalPreview'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/loading/Loading'

const DetailContent = ({ movieDetailData, creditsData, recommendationsData, isLoadingCredit, creditsError, isLoading, movieDetailError, isLoadingRecommendation, recommendationsErr }) => {
    const [dataMedia, setDataMedia] = useState([])
    const [activeTab, setActiveTab] = useState("Review");
    const [activeMedia, setActiveMedia] = useState(LIST_MEDIA.listMedia[0])
    const [isOpen, setIsOpen] = useState(false)
    const [end, setEnd] = useState(15)
    const [recommendEnd, setRecommendEnd] = useState(20);
    const nav = useNavigate()
    const handleClickTab = (item) => {
        setActiveTab(item)
    }
    const handleClickMedia = (item) => {
        setActiveMedia(item)
    }
    useEffect(() => {
        if (activeMedia === "Most Popular") {
            setDataMedia([{
                backdrop: movieDetailData?.backdrop_path, video: movieDetailData?.videos.results[0]?.key, isVideo: false
            }])
        } else if (activeMedia === "Videos") {
            setDataMedia([{
                backdrop: movieDetailData?.backdrop_path, video: movieDetailData?.videos.results[0]?.key, isVideo: true
            }])
        } else if (activeMedia === "Backdrops") {
            setDataMedia([{ backdrop: movieDetailData?.backdrop_path, isBackDrop: true, isVideo: false }])
        }
    }, [activeMedia, movieDetailData])

    return (
        <div className="panel top__billed" >
            <div className="panel top__billed">
                <ListCard
                    title={"Top Billed Cast"}
                    gap={"15px"}
                    fontSize="1.4em"
                    fontWeight={"600"}
                >
                    {creditsData?.cast.slice(0, end).map((credit, index) => {
                        return (
                            <div key={index} className="card__item">
                                <Card
                                    width={140}
                                    styleCss={{
                                        fontSizeName: "16px",
                                        fontWeightName: "700",
                                        paddingContent: "10px",
                                        fontSizeDesc: "15px",
                                        fontWeightDesc: "400",
                                    }}
                                    image={
                                        credit.profile_path
                                            ? `https://www.themoviedb.org/t/p/w138_and_h175_face${credit.profile_path}`
                                            : "https://preview.redd.it/is-their-a-way-to-change-you-avatar-on-epic-games-if-not-v0-joqzwwm6nv4a1.jpg?width=201&format=pjpg&auto=webp&s=5a6215f1326e1148ea5ba209613795cfc62938a2"
                                    }
                                    name={credit.name}
                                    description={credit.character}
                                    borderRadius="8px"
                                />
                            </div>
                        );
                    })}
                    {end <= creditsData?.cast.length ? (
                        <div
                            className="viewMore"
                            onClick={() => {
                                setEnd((pre) => pre + 15);
                            }}
                        >
                            <p>
                                <span>View More</span>
                                <span className="icon__view--more arrow-thin-right"></span>
                            </p>
                        </div>
                    ) : null}
                </ListCard>

                <div className="top__billed__btn">
                    <p>Full Cast & Crew</p>
                </div>
            </div>

            <div className="social__panel">
                <div className="review">
                    <ListHorizontal
                        titleTab={"Social"}
                        isTabBorderBottom
                        styleCssTabPrimary={{
                            textColor: "#000",
                            borderBottom: "3px solid #000",
                        }}
                        listItemTab={["Review", "Discussions"]}
                        itemTabActive={activeTab}
                        onClickTab={handleClickTab}
                    >
                        {/* Tabs */}
                        <div className="review__content">
                            {activeTab === "Review"
                                ? `We don't have any reviews for ${movieDetailData?.original_title}. Would you like to write one?`
                                : LIST_ICON?.map((index) => {
                                    return (
                                        <div key={index} className="item__discussion">
                                            <Discussion
                                                img={
                                                    "https://www.themoviedb.org/t/p/w45_and_h45_face/qZW7TazXYrGysGBgO6ygeAaC4WO.jpg"
                                                }
                                                link={"Sequel snubbed at the Oscars 2023?"}
                                                status={"Open"}
                                                count={0}
                                            ></Discussion>
                                        </div>
                                    );
                                })}
                        </div>
                    </ListHorizontal>
                    <div className="discussion__btn">
                        <p>Go to Discussions</p>
                    </div>
                </div>
            </div>
            <div className="social__scroller">
                <ListHorizontal titleTab={"Media"} isTabBorderBottom styleCssTabPrimary={{ textColor: "#000", borderBottom: "3px solid #000" }} listItemTab={LIST_MEDIA.listMedia} itemTabActive={activeMedia} onClickTab={handleClickMedia}>

                    {/* Tabs */}
                    <div className="review__content" style={{ width: '100%' }}>
                        {
                            isLoading ? <Loading /> : movieDetailError ? <div className="list-error">{movieDetailError.status_message}</div> : dataMedia ?
                                dataMedia?.map((mediaItem, index) => {
                                    return <div key={index} className="media__item" style={{ display: "flex" }}>
                                        <div className="media__video" onClick={() => {
                                            setIsOpen(true)
                                        }}>
                                            {!!mediaItem.isBackDrop || <Card width={500}
                                                displayIconPlay
                                                styleCss={{
                                                    fontSizeName: "16px",
                                                    fontWeightName: "700",
                                                    paddingContent: "10px",
                                                    fontSizeDesc: "15px",
                                                    fontWeightDesc: "400"
                                                }} image={mediaItem?.backdrop ? `https://www.themoviedb.org/t/p/w533_and_h300_face${mediaItem?.backdrop}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvURrxVdCQ-qh_VmG80K7iMWpsKzuUOrVBA&usqp=CAU'} />}
                                        </div>

                                        <ModalPreview isOpen={isOpen} onClose={() => setIsOpen(false)} keyVideo={mediaItem.video} />

                                        {mediaItem.isVideo || <Card width={500}
                                            styleCss={{
                                                fontSizeName: "16px",
                                                fontWeightName: "700",
                                                paddingContent: "10px",
                                                fontSizeDesc: "15px",
                                                fontWeightDesc: "400"
                                            }} image={mediaItem?.backdrop ? `https://www.themoviedb.org/t/p/w533_and_h300_face${mediaItem?.backdrop}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvURrxVdCQ-qh_VmG80K7iMWpsKzuUOrVBA&usqp=CAU'} />}
                                    </div>
                                }) : <div className="list-empty">Opps!! Now we don't have any data for this title</div>
                        }
                        <div />
                    </div>
                </ListHorizontal>
            </div>

            <div className="collection">
                <Collection
                    styleCss={{
                        backgroundImage:
                            "https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg",
                        fontSizeTitle: "1.9em",
                        fontWeightTitle: 600,
                        justCenter: "center",
                    }}
                    collection={{
                        title: "Part of the Loạt phim Avatar",
                        desc: "Includes Avatar, Avatar: Dòng Chảy Của Nước, Avatar 3, Avatar 4, and Avatar 5",
                    }}
                >
                    <div className="collection__btn">
                        <Button
                            styleCss={{
                                borderRadius: "20px",
                                backgroundColor: "#000",
                                color: "#fff",
                                padding: "6px 20px",
                                fontWeight: 700,
                            }}
                        >
                            <span>VIEW THE COLLECTION</span>
                        </Button>
                    </div>
                </Collection>
            </div>
            <div className="recommendations" >
                <ListCard title={"Recommendations"} gap={"15px"} fontSize="1.4em" fontWeight={"600"}>
                    {
                        isLoadingRecommendation ? <Loading heightBlock='200px' /> : recommendationsErr ?
                            <div className="list-error">{creditsError.status_message}</div> :
                            recommendationsData ?
                                recommendationsData?.results.slice(0, recommendEnd).map((recommendation, index) => {
                                    return <div key={index} onClick={() => {
                                        nav(`/movie/${recommendation.id}`, window.scrollTo(0, 0))
                                    }} className="item__recommendation">
                                        <Card width={250} styleCss={{
                                            fontSizeName: "16px",
                                            fontWeightName: "700",
                                            paddingContent: "10px",
                                            fontSizeDesc: "15px",
                                            fontWeightDesc: "400"
                                        }} image={recommendation.backdrop_path ? `https://www.themoviedb.org/t/p/w250_and_h141_face${recommendation.backdrop_path}` : 'https://www.blackrockworkwear.com/themes/blackrock/assets/images/default-video-image.png'} description={recommendation.original_title} borderRadius="8px" isRecommendation vote_average={`${Math.round(recommendation.vote_average * 10)}%`} />

                                        <div className="meta">
                                            <span className="release_date"><span><i className="fa-regular fa-calendar-days"></i></span> 11/09/2022</span>
                                            <div className="listIcon">
                                                {
                                                    LIST_IMAGE.map((icon, index) => {
                                                        return <span key={index} className="icon" style={{ backgroundImage: `url(${icon})` }}></span>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }) :
                                <div className="list-empty">Opps!! Now we don't have any data for this title</div>
                    }
                    {(recommendEnd <= recommendationsData?.results.length) ? <div className={!isLoadingRecommendation ? `viewMore` : 'displayNone'} onClick={() => {
                        setRecommendEnd(pre => pre + 20)
                    }}>
                        <p>
                            <span>View More</span>
                            <span className="icon__view--more arrow-thin-right"></span>
                        </p>
                    </div> : null}
                </ListCard>
            </div>
        </div>
    );
};

export default DetailContent;
