import React from 'react'
import About1 from '../images/about/1.jpg';
import About2 from '../images/about/2.jpg';
import About3 from '../images/about/3.jpg';
const Card = () =>{
    return (
        <section className="section">
            <div className="container">

                <div className="section__header">
                    <h3 className="section__suptitle">Who we are</h3>
                    <h2 className="section__title">Meet our team</h2>
                    <div className="section__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={About1} alt=""/>
                            </div>
                            <div className="card__text">
                                <div className="social">
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-pinterest-p"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card__info">
                            <div className="card__name">Matthew Dix</div>
                            <div className="card__prof">Graphic Design</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={About2} alt=""/>
                            </div>
                            <div className="card__text">
                                <div className="social">
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-pinterest-p"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card__info">
                            <div className="card__name">Christopher Campbell</div>
                            <div className="card__prof">Branding/UX design</div>
                        </div>
                    </div>

                    <div className="card__item">
                        <div className="card__inner">
                            <div className="card__img">
                                <img src={About3} alt=""/>
                            </div>
                            <div className="card__text">
                                <div className="social">
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-pinterest-p"/>
                                    </a>
                                    <a className="social__item" href="#" target="_blank">
                                        <i className="fab fa-instagram"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card__info">
                            <div className="card__name">Michael Fertig</div>
                            <div className="card__prof">Developer</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Card;