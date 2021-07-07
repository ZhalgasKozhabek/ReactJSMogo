import React from 'react'

const Navbar = () =>{
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">MoGo</div>

                    <nav className="nav">
                        <a className="nav__link active" href="/team">About</a>
                        <a className="nav__link" href="#">Service</a>
                        <a className="nav__link" href="#">Blog</a>
                        <a className="nav__link" href="#">Work</a>
                        <a className="nav__link" href="#">Contact</a>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Navbar;