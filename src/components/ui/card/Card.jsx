import React from 'react'
import './Card.scss'
const Card = () => {
    return (
        <div className="card">
            <div className="card__image">
                <div className="image__wrapper">
                    <a href="" title='Người Sói Tuổi Teen: Bản Điện Ảnh'></a>
                    <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/wAkpPm3wcHRqZl8XjUI3Y2chYq2.jpg" alt="" />
                </div>

                <div className="image__options">
                    <i class="fa-regular fa-comment-dots"></i>
                </div>
            </div>
            <div className="card__content">
                <div className="content__consensus">
                    <div className="outer__ring">
                        <div className="percent">
                            <span>85%</span>
                        </div>
                    </div>
                </div>

                <h2>
                    <a href="" title='Người Sói Tuổi Teen: Bản Điện Ảnh'>Người Sói Tuổi Teen: Bản Điện Ảnh</a>
                </h2>

                <p>Jan 18, 2023</p>
            </div>
        </div>
    )
}

export default Card