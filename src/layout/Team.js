import React from 'react'
import About1 from '../images/about/1.jpg';
import About2 from '../images/about/2.jpg';
import About3 from '../images/about/3.jpg';

const Team = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h3 className="section__suptitle">What we do</h3>
                    <h2 className="section__title">Story about us</h2>
                    <div className="section__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img className="card__img" src={About1} alt=""/>
                            </div>
                            <div className="card__text">super team</div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img className="card__img" src={About2} alt=""/>
                            </div>
                            <div className="card__text">super team</div>
                        </div>
                    </div>
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img className="card__img" src={About3} alt=""/>
                            </div>
                            <div className="card__text">super team</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;