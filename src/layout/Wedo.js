import React from 'react'
import Services1 from '../images/services/photography.png';
import Services3 from '../images/services/creativity.png';
import Services2 from '../images/services/webdesign.png';
import Image1 from '../images/wedo.jpg';
const Wedo = () =>{
    return (
        <section className="section">
            <div className="container">

                <div className="section__header">
                    <h3 className="section__suptitle">Service</h3>
                    <h2 className="section__title">what we do</h2>
                    <div className="section__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>

                <div className="wedo">
                    <div className="wedo__item">
                        <img className="wedo__img" src={Image1} alt=""/>
                    </div>

                    <div className="wedo__item">

                        <div className="accordion">
                            <div className="accordion__item">
                                <div className="accordion__header">
                                    <img className="accordion__icon" src={Services1}
                                         alt=""/>
                                        <div className="accordion__title">Photography</div>
                                </div>
                                <div className="accordion__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                        id est laborum.</p>
                                </div>
                            </div>

                            <div className="accordion__item active">
                                <div className="accordion__header">
                                    <img className="accordion__icon" src={Services3} alt=""/>
                                        <div className="accordion__title">Creativity</div>
                                </div>
                                <div className="accordion__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                        irure
                                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur.
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>

                            <div className="accordion__item">
                                <div className="accordion__header">
                                    <img className="accordion__icon" src={Services2} alt=""/>
                                        <div className="accordion__title">web design</div>
                                </div>
                                <div className="accordion__content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

)
}

export default Wedo;