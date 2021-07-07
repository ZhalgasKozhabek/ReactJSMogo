import React from 'react'
import Blog1 from '../images/blog/1.jpg';
import Blog2 from '../images/blog/2.jpg';
import Blog3 from '../images/blog/3.jpg';
import Instagram1 from '../images/instagram/1.jpg'
import Instagram2 from '../images/instagram/2.jpg'
import Instagram3 from '../images/instagram/3.jpg'
import Instagram4 from '../images/instagram/4.jpg'
import Instagram5 from '../images/instagram/5.jpg'
import Instagram6 from '../images/instagram/6.jpg'
import Instagram7 from '../images/instagram/7.jpg'
import Instagram8 from '../images/instagram/8.jpg'
import Instagram9 from '../images/instagram/9.jpg'
const Footer = () =>{
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer__inner">
                    <div className="footer__col  footer__col--first">
                        <div className="footer__logo">MoGo</div>
                        <div className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <div className="footer__social">
                            <div className="footer__social-header">
                                <b>15k</b> followers
                            </div>
                            <div className="footer__social-content">
                                Follow Us:
                                <a href="#" target="_blank">
                                    <i className="fab fa-facebook"/>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-twitter"/>
                                </a>
                                <a href="#" target="_blank">
                                    <i className="fab fa-instagram"/>
                                </a>
                            </div>
                        </div>

                        <form className="subscribe" action="/" method="post">
                            <input className="subscribe__input" type="email" name="name" placeholder="Your Email..."/>
                                <button className="subscribe__btn" type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className="footer__col  footer__col--second">
                        <div className="footer__title">Blogs</div>

                        <div className="blogs">
                            <div className="blogs__item">
                                <img className="blogs__img" src={Blog1} alt=""/>
                                    <div className="blogs__content">
                                        <a className="blogs__title" href="#">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing</a>
                                        <div className="blogs__date">Jan 9, 2016</div>
                                    </div>
                            </div>

                            <div className="blogs__item">
                                <img className="blogs__img" src={Blog2} alt=""/>
                                    <div className="blogs__content">
                                        <a className="blogs__title" href="#">Lorem ipsum dolor</a>
                                        <div className="blogs__date">Jan 9, 2016</div>
                                    </div>
                            </div>

                            <div className="blogs__item">
                                <img className="blogs__img" src={Blog3} alt=""/>
                                    <div className="blogs__content">
                                        <a className="blogs__title" href="#">Lorem ipsum dolor sit amet, consectetur
                                            adipiscing</a>
                                        <div className="blogs__date">Jan 9, 2016</div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer__col  footer__col--third">
                        <div className="footer__title">Instagram</div>
                        <div className="instagram">
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram1} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram2} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram3} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram4} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram5} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram6} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram7} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram8} alt=""/>
                            </a>
                            <a className="instagram__item" href="#" target="_blank">
                                <img src={Instagram9} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;