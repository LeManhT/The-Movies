import React from 'react'
import './listCard.scss'
import PropTypes from 'prop-types'
const ListCard = ({ title, children, gap, fontWeight = 600, fontSize = "1.1em", isHr, btnContent, handleScroll, scrollTop }) => {
    return (
        <div className="listCard__wrapper" >
            <div className="title" dir='auto' style={{ fontWeight: fontWeight, fontSize: fontSize }}>
                <p>{title}</p>
            </div>
            {isHr ? <div className='hr'></div> : null}
            <div className="listCard--large">
                <div className="listCard" onScroll={handleScroll} style={{ gap: gap }}>
                    {children}
                </div>
                {scrollTop !== 0 ? <div className="detail__style" ></div> : null}
            </div>
            {btnContent && <div className="listCard__btn">
                <p>{btnContent}</p>
            </div>}
        </div>
    )
}

ListCard.propTypes = {
    title: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    isHr: PropTypes.bool,
    children: PropTypes.node
}

export default ListCard