import React from 'react'
import './collection.scss'

const Collection = () => {
    return (
        <div className="collection__wrapper">
            <div className="collection__content">
                <div className="collection__title">
                    <h2>Welcome.</h2>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className="collection__other">
                    <input type="text" placeholder='Search' />
                </div>
            </div>
        </div>
    )
}

export default Collection