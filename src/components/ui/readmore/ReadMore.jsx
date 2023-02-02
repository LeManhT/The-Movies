import React from 'react'
import { useState } from 'react';
import './readMore.scss'

const ReadMore = ({ children, countLetter = 300 }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="readMore__content_container">
            <p className={`readMore__text ${isReadMore ? 'shouldFade' : ''}`}>
                {isReadMore ? text.slice(0, countLetter) : text}
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? <div className="showFull">
                        <span>Read more</span>
                        <div className="showIcon">
                            <i class="fa-sharp fa-solid fa-chevron-right"></i>
                        </div>
                    </div> : <div className="showLess">
                        <span>Show less</span>
                        <div className="showIcon">
                            <i class="fa-solid fa-chevron-left"></i>
                        </div>
                    </div>}
                </span>
            </p>
        </div>
    );
};

export default ReadMore