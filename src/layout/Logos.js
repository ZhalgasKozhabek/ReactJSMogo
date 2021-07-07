import React from 'react'
import Logos1 from '../images/logos/1.png';
import Logos2 from '../images/logos/2.png';
import Logos3 from '../images/logos/3.png';
import Logos4 from '../images/logos/4.png';
import Logos5 from '../images/logos/5.png';
import Logos6 from '../images/logos/6.png';

const Logos = () =>{
    return (
        <div className="section  section--gray">
            <div className="container">

                <div className="logos">
                    <div className="logos__item">
                        <img src={Logos1} alt=""/>
                    </div>
                    <div className="logos__item">
                        <img src={Logos2} alt=""/>
                    </div>
                    <div className="logos__item">
                        <img src={Logos3}  alt=""/>
                    </div>
                    <div className="logos__item">
                        <img src={Logos4}  alt=""/>
                    </div>
                    <div className="logos__item">
                        <img src={Logos5}  alt=""/>
                    </div>
                    <div className="logos__item">
                        <img src={Logos6}  alt=""/>
                    </div>
                </div>

            </div>
        </div>


)
}

export default Logos;