import React from 'react'

export default function Banner() {
    return (
        <div className="section-bgc intro">
            <div className="intro-item intro-item-type-1" style={{backgroundImage: "url('assets/img/intro-img1.jpg')",}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="intro-content" style={{marginLeft: "4rem",}}>
                                <div className="section-heading shm-none">
                                    <div className="section-subheading">Lorem, ipsum dolor.</div>
                                    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                                    <p className="section-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet provident recusandae qui deserunt. Incidunt voluptatibus et nam eum minus neque recusandae quam cumque ipsam voluptatem.</p>
                                </div>
                                {/* <div className="btn-group intro-btns">
                                    <a href="https://www.templatemonster.com/website-templates/pathsoft-it-solutions-for-your-business-services-website-template-83414.html?utm_campaign=blog_site_KovalWeb&utm_source=KovalWeb&utm_medium=referral&aff=KovalWeb" className="btn btn-border btn-with-icon btn-small ripple">
                                        <span>HTML5</span>
                                        <svg className="btn-icon-right" viewBox="0 0 13 9" width="13" height="9"><use href="assets/img/sprite.svg#arrow-right"></use></svg>
                                    </a>
                                    <a href="https://www.templatemonster.com/wordpress-themes/pathsoft-it-solutions-for-your-business-services-wordpress-theme-99496.html?utm_campaign=blog_site_KovalWeb&utm_source=KovalWeb&utm_medium=referral&aff=KovalWeb" className="btn btn-border btn-with-icon btn-small ripple">
                                        <span>WordPress</span>
                                        <svg className="btn-icon-right" viewBox="0 0 13 9" width="13" height="9"><use  href="assets/img/sprite.svg#arrow-right"></use></svg>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
