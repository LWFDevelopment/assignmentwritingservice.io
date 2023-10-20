import React from 'react'

export default function Navbar() {
  return (
    <>
        
    {/* //  Begin mobile main menu  */}
    <nav className="mmm">
        <div className="mmm-content">
            <ul className="mmm-list">
            <li>
                <a href="#services">
                    <span>Services</span>
                </a>
            </li>
            <li>
                <a href="#usp">
                    <span>Our Usp</span>
                </a>
            </li>
            <li>
                <a href="#faqs">
                    <span>FAQs</span>
                </a>
            </li>
            <li>
                <a href="#reviews">
                    <span>Reviews</span>
                </a>
            </li>
            <li>
                <a href="#contact">
                    <span>Contacts</span>
                </a>
            </li>
            </ul>
        </div>
    </nav>
     {/* End mobile main menu */}
    
    <header className="header header-minimal">
        <nav className="header-fixed">
            <div className="container">
                <div className="row flex-nowrap align-items-center justify-content-between">
                    <div className="col-auto header-fixed-col logo-wrapper">
                        <a href="index.html" className="logo" title="PathSoft">
                            Logo
                            {/* <img src="assets/img/logo.svg" width="115" height="36" alt="PathSoft"/> */}
                        </a>
                    </div>
                    <div className="col-auto col-xl col-static header-fixed-col d-none d-xl-block">
                        <div className="row flex-nowrap align-items-center justify-content-end">
                            <div className="col header-fixed-col d-none d-xl-block col-static">
                                {/* <!-- Begin main menu --> */}
    <nav className="main-mnu">
        <ul className="main-mnu-list">
            <li>
                <a href="#services" data-title="Services">
                    <span>Services</span>
                </a>
            </li>
            <li>
                <a href="#usp" data-title="Our USP">
                    <span>Our Usp</span>
                </a>
            </li>
            <li>
                <a href="#faqs" data-title="FAQs">
                    <span>FAQs</span>
                </a>
            </li>
            <li>
                <a href="#reviews" data-title="Reviews">
                    <span>Reviews</span>
                </a>
            </li>
            <li>
                <a href="#contact" data-title="Contacts">
                    <span>Contacts</span>
                </a>
            </li>
        </ul>
    </nav> 
    {/* End main menu  */}
                            </div>
                        </div>
                    </div>
                    <div className="col-auto d-block d-xl-none header-fixed-col">
                        <div className="main-mnu-btn">
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                            <span className="bar bar-4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </>
    )
}
