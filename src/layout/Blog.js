import React from 'react'
import Blog1 from '../images/blog/1.jpg';
import Blog2 from '../images/blog/2.jpg';
import Blog3 from '../images/blog/3.jpg';

const Blog = () =>{
    return (
        <section className="section">
            <div className="container">

                <div className="section__header">
                    <h3 className="section__suptitle">Our stories</h3>
                    <h2 className="section__title">Latest blog</h2>
                </div>

                <div className="blog">
                    <div className="blog__item">
                        <div className="blog__header">
                            <a href="#">
                                <img className="blog__photo" src={Blog1} alt=""/>
                            </a>
                            <div className="blog__date">
                                <div className="blog__date-day">15</div>
                                Jan
                            </div>
                        </div>
                        <div className="blog__content">
                            <div className="blog__title">
                                <a href="#">Lorem ipsum dolor sit amet</a>
                            </div>
                            <div className="blog__text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="blog__footer">
                            <div className="blog-stat">
                        <span className="blog-stat__item">
                            <i className="far fa-eye"/> 542
                        </span>
                                <span className="blog-stat__item">
                            <i className="far fa-comment-dots"/> 17
                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__item">
                        <div className="blog__header">
                            <a href="#">
                                <img className="blog__photo" src={Blog2} alt=""/>
                            </a>
                            <div className="blog__date">
                                <div className="blog__date-day">15</div>
                                Jan
                            </div>
                        </div>
                        <div className="blog__content">
                            <div className="blog__title">
                                <a href="#">Lorem ipsum dolor sit amet</a>
                            </div>
                            <div className="blog__text">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="blog__footer">
                            <div className="blog-stat">
                        <span className="blog-stat__item">
                            <i className="far fa-eye"/> 542
                        </span>
                                <span className="blog-stat__item">
                            <i className="far fa-comment-dots"/> 17
                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__item">
                        <div className="blog__header">
                            <a href="#">
                                <img className="blog__photo" src={Blog3} alt=""/>
                            </a>
                            <div className="blog__date">
                                <div className="blog__date-day">15</div>
                                Jan
                            </div>
                        </div>
                        <div className="blog__content">
                            <div className="blog__title">
                                <a href="#">Lorem ipsum dolor sit amet</a>
                            </div>
                            <div className="blog__text">Consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="blog__footer">
                            <div className="blog-stat">
                        <span className="blog-stat__item">
                            <i className="far fa-eye"/> 542
                        </span>
                                <span className="blog-stat__item">
                            <i className="far fa-comment-dots"/> 17
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Blog;