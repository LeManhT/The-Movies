import React from 'react'
import './searchItemResult.scss'

const SearchItemResult = ({ imgSrc, title, releaseDate, overview }) => {
    return (
        <>
            {imgSrc || title || releaseDate || overview ?
                <div className="searchItem__result searchResult__wrapper">
                    <div className="searchItem__image">
                        <img src={imgSrc} alt="" />
                    </div>

                    <div className="searchItem__details ">
                        <div className="details__title">
                            <h2>{title}</h2>
                            <div className="details__release_date">
                                <span>{releaseDate}</span>
                            </div>
                        </div>

                        <div className="details__overview">
                            <p>{overview}</p>
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}

export default SearchItemResult