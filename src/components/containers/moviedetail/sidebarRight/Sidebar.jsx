import React, { useEffect } from 'react'
import './sidebarRight.scss'
import Tag from '../../../ui/tag/Tag'
import EditLeader from '../../../ui/editLeader/EditLeader'
import Button from '../../../ui/button/Button'
import ShortcutText from '../../../ui/shortcutText/ShortcutText'
import Description from '../../../ui/description/Description'
import { ReactComponent as Chart } from '../../../../assets/imgs/chart.svg';
import { LIST_IMAGE } from '../../../../constants/constants'



const Sidebar = ({ keywordsData, movieDetailData }) => {

    return (
        <>
            <div className="body__right__facts">
                <div className="body__right__facts__social_links">
                    {
                        LIST_IMAGE.map((item, index) => {
                            return <span key={index} className="glyphicons_link" style={{ backgroundImage: `url(${item})` }}></span>
                            // <i key={index} style={{ fontSize: "20px", margin: "0px 10px" }} className={item}></i>
                        })
                    }
                </div>


                <div className="body__right__facts__cate">
                    <Description title={"Original Title"} desc={movieDetailData?.original_title}></Description>
                    <Description title={"Status"} desc={movieDetailData?.status}></Description>
                    <Description title={"Original Language"} desc={movieDetailData?.original_language}></Description>
                    <Description title={"Budget"} desc={`$${movieDetailData?.budget.toLocaleString()}`}></Description>
                    <Description title={"Revenue"} desc={`$${movieDetailData?.revenue.toLocaleString()}`}></Description>
                </div>


                <div className="body__right__facts__keywords">
                    <div className="keywords__title">
                        <h3>Keywords</h3>
                    </div>
                    <div className="keywords__list">
                        {
                            keywordsData?.keywords.map((keyword, index) => {
                                return <Tag key={index} tagContent={keyword.name}></Tag>
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

                <div className="top__contributors">
                    <div className="top__contributors__title">
                        <h3>Top Contributors</h3>
                    </div>
                    <EditLeader title={'80'} editName="Sheigunt" imgSrc={"https://www.themoviedb.org/t/p/w45_and_h45_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"} />
                    <EditLeader title={'80'} editName="Sheigunt" imgSrc={"https://www.themoviedb.org/t/p/w45_and_h45_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"} />
                    <EditLeader title={'80'} editName="Sheigunt" imgSrc={"https://www.themoviedb.org/t/p/w45_and_h45_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"} />
                    <EditLeader title={'80'} editName="Sheigunt" imgSrc={"https://www.themoviedb.org/t/p/w45_and_h45_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"} />

                    <div className="view__edit">
                        <p>View edit history</p>
                    </div>
                </div>

                <div className="popular__trend">
                    <div className="popular__trend__title">
                        <h3>Popularity Trend</h3>
                        <div className="popular__trend__chart">
                            <Chart></Chart>
                        </div>
                    </div>
                </div>


                <div className="edit__btn" style={{ marginTop: "30px" }}>
                    <Button styleCss={{
                        backgroundColor: "#000", color: "white", fontSize: "0.9em", borderRadius: '20px',
                        padding: "10px 20px", fontWeight: "700"
                    }} > <p style={{ textTransform: "uppercase" }}>Edit Page</p> </Button>
                </div>


                <div className="shortcut">
                    <ShortcutText backgroundImage={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-357-keyboard-4de4fe2896d6ba568aeb8c07d250a99374f086554ffd4b1f7645d69325b979ab.svg"}>
                        <span>Keyboard Shortcuts</span>
                    </ShortcutText>

                    <ShortcutText backgroundImage={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-933-speech-bubble-alert-b33d276606a1a76a1a612c9a7043dfd275ddf0ac55587a5e6a621323db6c488a.svg"}>
                        <span>Report an issue</span>
                    </ShortcutText>
                </div>

            </div>
        </>
    )
}

export default Sidebar