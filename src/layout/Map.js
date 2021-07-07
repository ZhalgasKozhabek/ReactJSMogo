import React from 'react'

const Navbar = () =>{
    return (
        <section className="section  section--map">
            <div className="container">
                <div className="map">
                    <h2 className="map__title">
                        <div><i className="fas fa-map-marker-alt"/></div>
                        <a href="https://goo.gl/maps/14zPURyPKsUF7G1J7" target="_blank">Open Map</a>
                    </h2>
                </div>
            </div>
        </section>

    )
}

export default Navbar;