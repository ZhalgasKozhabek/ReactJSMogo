import React from 'react'
import Photo1 from '../images/ads_size_p_app.png';
const Reviews = () =>{
    return (
        <div className="section  section--gray">
            <div className="container">

                <div className="reviews">
                    <a className="reviews__btn  reviews__btn--prev" href="#">Prev</a>
                    <a className="reviews__btn  reviews__btn--next" href="#">Next</a>

                    <div className="reviews__item">
                        <img className="reviews__photo" src={Photo1} alt=""/>
                            <div className="reviews__text">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation.”
                            </div>
                            <div className="reviews__author">Jon Doe</div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Reviews;