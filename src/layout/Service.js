import React from 'react'
import Services1 from '../images/services/photography.png';
import Services2 from '../images/services/webdesign.png';
import Services3 from '../images/services/creativity.png';
import Services4 from '../images/services/seo.png';
import Services5 from '../images/services/css-html.png';
import Services6 from '../images/services/digital.png';


const Navbar = () =>{
    return (
        <section className="section">
            <div className="container">

                <div className="section__header">
                    <h3 className="section__suptitle">We work with</h3>
                    <h2 className="section__title">Amazing Services</h2>
                </div>

                <div className="services">
                    <div className="services__item  services__item--border">
                        <img className="services__icon" src={Services1} alt=""/>

                            <div className="services__title">Photography</div>
                            <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor.
                            </div>
                    </div>
                    <div className="services__item  services__item--border">
                        <img className="services__icon" src={Services2} alt=""/>

                            <div className="services__title">Web Design</div>
                            <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor.
                            </div>
                    </div>
                    <div className="services__item  services__item--border">
                        <img className="services__icon" src={Services3} alt=""/>

                            <div className="services__title">Creativity</div>
                            <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor.
                            </div>
                    </div>
                    <div className="services__item">
                        <img className="services__icon" src={Services4} alt=""/>

                            <div className="services__title">seo</div>
                            <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor.
                            </div>
                    </div>
                    <div className="services__item">
                        <img className="services__icon" src={Services5} alt=""/>

                            <div className="services__title">Css/Html</div>
                            <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor.
                            </div>
                    </div>
                    <div className="services__item">
                        <img className="services__icon" src={Services6} alt=""/>

                            <div className="services__title">digital</div>
                            <div className="services__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                do eiusmod tempor.
                            </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Navbar;