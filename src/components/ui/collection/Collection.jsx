import React from 'react'
import './collection.scss'

const Collection = ({ collection, children }) => {
    return (
        <div className="collection__wrapper">
            <div className="collection__content">
                <div className="collection__title" style={{ fontSize: collection.style.fontSizeTitle, fontWeight: collection.style.fontWeightTitle }}>
                    <h2>{collection.title}</h2>
                </div>
                <div className="collection__desc" style={{ fontSize: collection.style.fontSizeDesc, fontWeight: collection.style.fontWeightDesc }}>
                    <h3>{collection.desc}</h3>
                </div>
                <div className="collection__other">
                    {children}
                </div>
            </div>
        </div >
    )
}

export default Collection