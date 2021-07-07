import React from 'react'

const Navbar = () =>{
    return (
        <div className="statistics">
            <div className="container">
                <div className="stat">
                    <div className="stat__item">
                        <div className="stat__count">42</div>
                        <div className="stat__text">Web desin developer</div>
                    </div>
                    <div className="stat__item">
                        <div className="stat__count">123</div>
                        <div className="stat__text">Happy client</div>
                    </div>
                    <div className="stat__item">
                        <div className="stat__count">15</div>
                        <div className="stat__text">Award winner</div>
                    </div>
                    <div className="stat__item">
                        <div className="stat__count">99</div>
                        <div className="stat__text">Cup of coffee</div>
                    </div>
                    <div className="stat__item">
                        <div className="stat__count">24</div>
                        <div className="stat__text">Members</div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Navbar;