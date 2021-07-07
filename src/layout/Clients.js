import React from 'react'
import Clients1 from '../images/P8LuQAj9yDk (1).jpeg';

const Clients = () => {
    return (
        <section className="section  section--clients">
            <div className="container">

                <div className="section__header">
                    <h3 className="section__sup">Happy Clients</h3>
                    <h2 className="section__title">What people say</h2>
                </div>

                <div className="clients">
                    <div className="clients__item">
                        <img className="clients__photo" src={Clients1} alt=""/>
                            <div className="clients__content">
                                <div className="clients__name">Matthew Dix</div>
                                <div className="clients__prof">Graphic Design</div>
                                <div className="clients__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                </div>
                            </div>
                    </div>

                    <div className="clients__item">
                        <img className="clients__photo" src={Clients1} alt=""/>
                            <div className="clients__content">
                                <div className="clients__name">Nick Karvounis</div>
                                <div className="clients__prof">Graphic Design</div>
                                <div className="clients__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                </div>
                            </div>
                    </div>

                    <div className="clients__item">
                        <img className="clients__photo" src={Clients1} alt=""/>
                            <div className="clients__content">
                                <div className="clients__name">Jaelynn Castillo</div>
                                <div className="clients__prof">Graphic Design</div>
                                <div className="clients__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                </div>
                            </div>
                    </div>

                    <div className="clients__item">
                        <img className="clients__photo" src={Clients1} alt=""/>
                            <div className="clients__content">
                                <div className="clients__name">Mike Petrucci</div>
                                <div className="clients__prof">Graphic Design</div>
                                <div className="clients__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                </div>
                            </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Clients;