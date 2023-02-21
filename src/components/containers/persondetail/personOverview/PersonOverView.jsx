import React from 'react'
import Card from '../../../ui/card/Card'
import ListCard from '../../../ui/listCard/ListCard'
import './personOverview.scss'
const PersonOverView = ({ dataPerson, personDetailCreditData }) => {
    return (
        <div className="person__overview">
            <div className="overview__title">
                <h2>{dataPerson?.name}</h2>
                <div className="overview__desc">
                    <p>Biography</p>
                </div>
            </div>

            <div className="overview__detail">
                <p>
                    {dataPerson?.biography}
                </p>
            </div>

            <div className="list__production">
                <ListCard title={"Known For"} gap={"15px"} fontSize="1.4em" fontWeight={"600"}>
                    {
                        personDetailCreditData?.cast.map((creditData, index) => {
                            return <div className="creditDataPerson" key={index}>
                                <Card width={135} styleCss={{
                                    fontSizeName: "16px",
                                    fontWeightName: "700",
                                    paddingContent: "10px",
                                    fontSizeDesc: "15px",
                                    fontWeightDesc: "400"
                                }} image={creditData?.poster_path ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2${creditData?.poster_path}` : 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg'} description={creditData?.original_title} borderRadius="8px" />
                            </div>
                        })
                    }
                </ListCard>
            </div>

        </div>
    )
}

export default PersonOverView