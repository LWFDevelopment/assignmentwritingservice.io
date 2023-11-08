import React, { useEffect } from 'react'

export default function Footer() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'assets/js/custom.js';
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        // <!-- Begin footer -->
        <footer className="footer footer-minimal">
            <div className="footer-main">
                <div className="container">
                    <div className="row items align-items-start">
                        <div className="col-lg-3 col-md-4 col-12 item">
                            <div className="widget-brand-info">
                                <div className="widget-brand-info-main">
                                    <a href="index.html" className="logo" title="PathSoft">
                                        {/* LOGO */}
                                        <img data-src="assets/img/logo-white.png" className="lazy" width="133" height="36" src="assets/img/logo-white.png" alt="PathSoft" data-loaded="true" style={{ opacity: "1", }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md item">
                            <div className="footer-item">
                                <h3>Get in Touch</h3>
                                <ul class="contact-list">
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">location_on</i>
                                        <div class="footer-contact-info">
                                            <a href="https://maps.app.goo.gl/vSS7gQz8dp2mC3wW8" className='text-white' target='blank'>
                                                148 Broadhurst Gardens, London, UK - NW63BH 
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">smartphone</i>
                                        <div class="footer-contact-info">
                                            <a href="tel:+447418343403" class="formingHrefTel text-white">+44 7418 343403</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">email</i>
                                        <div class="footer-contact-info">
                                            <a href="mailto:info@assignmentservice.io" className='text-white'>info@assignmentservice.io</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md item">
                            <div className="footer-item">
                                <nav className="footer-nav">
                                    <ul className="footer-mnu footer-mnu-line">
                                        <li><a href="#services" className="hover-link" data-title="Services"><span>Services</span></a></li>
                                        <li><a href="#usp" className="hover-link" data-title="USP"><span>USP</span></a></li>
                                        <li><a href="#faqs" className="hover-link" data-title="FAQs"><span>FAQs</span></a></li>
                                        <li><a href="#reviews" className="hover-link" data-title="Reviews"><span>Reviews</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row justify-content-between items">
                        <div className="col-md-auto col-12 item">
                            <nav className="footer-links">
                                <p className='text-center mb-1'><strong>Disclaimer </strong>Assignmentwritingservice.io provides academic materials, including assignments, essays, research papers, and presentations, for reference purposes only. We do not endorse plagiarism. Users are expected to utilize these resources solely for their writing endeavours</p>
                                <p className='text-center'>Copyright © 2010-2023 | Assignmentwritingservice.io | All rights reserved.</p>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End footer --> */}
        </footer>
    )
}
