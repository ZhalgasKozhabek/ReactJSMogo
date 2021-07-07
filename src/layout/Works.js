import React from 'react'
import Works1 from '../images/works/1.jpg';
import Works2 from '../images/works/2.jpg';
import Works3 from '../images/works/3.jpg';
import Works4 from '../images/works/4.jpg';
import Works5 from '../images/works/5.jpg';
import Works6 from '../images/works/6.jpg';
import Works7 from '../images/works/7.jpg';

const Works = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h3 className="section__suptitle">What we do</h3>
                    <h2 className="section__title">some of our work</h2>
                    <div className="section__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>

            <div className="works">
                <div className="works__col">
                    <div className="works__item">
                        <img className="works__image" src={Works1} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                    <div className="works__item">
                        <img className="works__image" src={Works2} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                </div>

                <div className="works__col">
                    <div className="works__item">
                        <img className="works__image" src={Works3} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                    <div className="works__item">
                        <img className="works__image" src={Works4} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                </div>

                <div className="works__col">
                    <div className="works__item">
                        <img className="works__image" src={Works5} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                </div>

                <div className="works__col">
                    <div className="works__item">
                        <img className="works__image" src={Works6} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                    <div className="works__item">
                        <img className="works__image" src={Works7} alt=""/>
                            <div className="works__info">
                                <div className="works__title">creatively designed</div>
                                <div className="works__text">Lorem ipsum dolor sit</div>
                            </div>
                    </div>
                </div>
            </div>
        </section>


)
}

export default Works;