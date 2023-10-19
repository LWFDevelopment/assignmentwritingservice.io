import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Reviews() {

    return (
        <section className="section py-0" id="reviews">
            <div className="container">
                <div className="row">
                    <header className="col-12">
                        <div className="section-heading heading-center">
                            <div className="section-subheading">Reviews from our clients</div>
                            <h2>What People Say</h2>
                        </div>
                    </header>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="item">
                                <div className="reviews-item item-style">
                                    <div className="reviews-item-header">
                                        <div className="reviews-item-img">
                                            <img data-src="assets/img/auth-img-1.jpg" className="img-cover lazy" src="assets/img/auth-img-1.jpg" alt="" />
                                        </div>
                                        <div className="reviews-item-info">
                                            <h4 className="reviews-item-name item-heading">Catherine Williams</h4>
                                            <div className="reviews-item-position">Regular client</div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-text">
                                        <p>PathSoft offers a high caliber of resources skilled in Microsoft Azure.NET, mobile and Quality Assurance. They became our true business partners over the past three years.</p>
                                    </div>
                                </div>
                            </div></SwiperSlide>
                        <SwiperSlide>
                            <div className=" item">
                                <div className="reviews-item item-style">
                                    <div className="reviews-item-header">
                                        <div className="reviews-item-img">
                                            <img data-src="assets/img/auth-img-2.jpg" className="img-cover lazy" src="assets/img/auth-img-2.jpg" alt="" />
                                        </div>
                                        <div className="reviews-item-info">
                                            <h4 className="reviews-item-name item-heading">Rupert Wood</h4>
                                            <div className="reviews-item-position">Regular client</div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit consequuntur sequi eos beatae deleniti culpa cupiditate rerum. Similique, blanditiis rem perspiciatis fugiat voluptatem quas officiis ducimus reprehenderit.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="reviews-item item-style">
                                    <div className="reviews-item-header">
                                        <div className="reviews-item-img">
                                            <img data-src="assets/img/auth-img-3.jpg" className="img-cover lazy" src="assets/img/auth-img-3.jpg" alt="" />
                                        </div>
                                        <div className="reviews-item-info">
                                            <h4 className="reviews-item-name item-heading">Samantha Brown</h4>
                                            <div className="reviews-item-position">Regular client</div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-text">
                                        <p>We sincerely hope that each and every user entering our website will find exactly. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <div className="reviews-item item-style">
                                    <div className="reviews-item-header">
                                        <div className="reviews-item-img">
                                            <img data-src="assets/img/auth-img-3.jpg" className="img-cover lazy" src="assets/img/auth-img-3.jpg" alt="" />
                                        </div>
                                        <div className="reviews-item-info">
                                            <h4 className="reviews-item-name item-heading">Samantha Brown</h4>
                                            <div className="reviews-item-position">Regular client</div>
                                        </div>
                                    </div>
                                    <div className="reviews-item-text">
                                        <p>We sincerely hope that each and every user entering our website will find exactly. With advanced features of activating account and new login widgets, you will definitely have a great experience of using our web page.</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    )
}
