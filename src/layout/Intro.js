import React from 'react'

const Intro = () =>{
    return (
        <div className="intro">
            <div className="container">
                <div className="intro__inner">
                    <h2 className="intro__suptitle">Creative Template</h2>
                    <h1 className="intro__title">Welcome to MoGo</h1>

                    <a className="btn" href="#">Learn More</a>
                </div>
            </div>

            <div className="slider">
                <div className="container">
                    <div className="slider__inner">
                        <div className="slider__item active">
                            <span className="slider__num">01</span>
                            Intro
                        </div>
                        <div className="slider__item">
                            <span className="slider__num">02</span>
                            Work
                        </div>
                        <div className="slider__item">
                            <span className="slider__num">03</span>
                            About
                        </div>
                        <div className="slider__item">
                            <span className="slider__num">04</span>
                            Contacts
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Intro;