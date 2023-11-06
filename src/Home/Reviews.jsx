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
                            <div className="section-subheading">Testmonials</div>
                            <h2>Student Experiences With Our Online Assignment Help Service</h2>
                        </div>
                    </header>
                    <Swiper
                        spaceBetween={50}
                        autoplay={true}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween:40,
                            },
                        }}
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
                                        <p>I took their Architecture assignment writing service and I am glad to refer it to anyone who is looking for well-researched assignments. Their writing services have provided me with the ease of working on my personal projects without worrying about assignment submissions.</p>
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
                                        <p>I was drenched in sweat to submit my programming assignment in 3 days when I started looking for professional writing services online. Finding this assignment writing service was a life-changing experience!</p>
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
                                        <p>I was hesitant to try out an assignment expert's work but due to urgency, I had to pick someone. I found them via an advertisement and thought they were genuine. Indeed this assignment writing service is great with quality and prices. Highly recommended for all those in need.</p>
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
