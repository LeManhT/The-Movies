import React from 'react'
import Card from '../../../ui/card/Card'
import ListCard from '../../../ui/listCard/ListCard'
import Discussion from '../../../ui/discussion/Discussion'
import './detailContent.scss'

const DetailContent = ({ listCard, listIcon, creditsData }) => {
    return (
        <>
            <div className="panel top__billed">
                <ListCard title={"Top Billed Cast"} gap={"15px"} fontSize="1.4em" fontWeight={"600"}>
                    {
                        creditsData?.cast.slice(0, 15).map((credit, index) => {
                            return <div className="card__item">
                                <Card key={index} width={140} image={"https://www.themoviedb.org/t/p/w138_and_h175_face/blKKsHlJIL9PmUQZB8f3YmMBW5Y.jpg"} name={credit.name} actor={credit.character} borderRadius="8px" />
                            </div>
                        })
                    }
                </ListCard>

                <div className="top__billed__btn">
                    <p>Full Cast & Crew</p>
                </div>
            </div>


            <div className="social__panel">
                <ListCard isHr>
                    <div className="media__panel">
                        <div className="review">
                            {/* Tabs */}
                            <div className="review__content">
                                {
                                    listIcon?.map((index) => {
                                        return <Discussion img={"https://www.themoviedb.org/t/p/w45_and_h45_face/qZW7TazXYrGysGBgO6ygeAaC4WO.jpg"} link={"Sequel snubbed at the Oscars 2023?"} status={"Open"} count={0}></Discussion>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </ListCard>
                <div className="discussion__btn">
                    <p>Go to Discussions</p>
                </div>
            </div>
        </>
    )
}

export default DetailContent