import React from 'react'
import './editLeader.scss'

const EditLeader = () => {
    return (
        <div className="editLeader">
            <div className="editLeader__avatar">
                <a href="">
                    <img src="https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" alt="" />
                </a>
            </div>
            <div className="editLeader__info">
                <p className="editCount">93
                    <br />
                    <a href="">razer123</a>
                </p>
            </div>
        </div>
    )
}

export default EditLeader