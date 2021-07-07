import React from 'react'
import Devices1 from '../images/ipad.png';
import Devices2 from '../images/iphone.png';
const Devices = () => {
    return (
        <section className="section section--devices">
            <div className="container">
                <div className="section__header">
                    <h3 className="section__suptitle">For all devices</h3>
                    <h2 className="section__title">Unique design</h2>
                </div>
                <div className="devices">
                    <img className="devices__item" src={Devices1} alt=""/>
                        <img className="devices__item devices__item--iphone" src={Devices2} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Devices;