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
                <div className="row items align-items-center">
                    <div className="col-lg-3 col-md-4 col-12 item">
                        <div className="widget-brand-info">
                            <div className="widget-brand-info-main">
                                <a href="index.html" className="logo" title="PathSoft">
                                    LOGO
                                    {/* <img data-src="assets/img/logo-white.svg" className="lazy" width="133" height="36" src="assets/img/logo-white.svg" alt="PathSoft" data-loaded="true" style={{opacity: "1",}} /> */}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md item">
                        <div className="footer-item">
                            <nav className="footer-nav">
                                <ul className="footer-mnu footer-mnu-line">
                                    <li><a href="#!" className="hover-link" data-title="Home"><span>Home</span></a></li>
                                    <li><a href="#!" className="hover-link" data-title="About us"><span>About us</span></a></li>
                                    <li><a href="#!" className="hover-link" data-title="Services"><span>Services</span></a></li>
                                    <li><a href="#!" className="hover-link" data-title="News"><span>News</span></a></li>
                                    <li><a href="#!" className="hover-link" data-title="Contacts"><span>Contacts</span></a></li>
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
                            <ul>
                                <li><a href="terms-and-conditions.html">Terms and Conditions</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-auto col-12 item">
                        <div className="copyright">© 2022 psFree. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- End footer --> */}
    </footer>
    )
}
