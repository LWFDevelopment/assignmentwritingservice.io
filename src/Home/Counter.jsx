import React from 'react'

export default function Counter() {
  return (
    <section className="section section-without-padding-bottom">
    <div className="container">
        <div className="row items spincrement-container">
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">star</i>
                        </div>
                        <div className="counter-min-numb " >4.5</div>
                    </div>
                    <div className="counter-min-info">
                        <img src="./assets/img/sitejabber-logo-vector.svg" alt="" />
                        {/* <h4 className="counter-min-heading">Years Of Experience</h4> */}
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">star</i>
                        </div>
                        <div className="counter-min-numb " data-from="0" data-to="40">4.8</div>
                    </div>
                    <div className="counter-min-info">
                        <img src="./assets/img/trustpilot-1.svg" width="150" alt="" />
                        {/* <h4 className="counter-min-heading">Consultans</h4> */}
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">star</i>
                        </div>
                        <div className="counter-min-numb " data-from="0" data-to="160">4.2</div>
                    </div>
                    <div className="counter-min-info">
                        <img src="./assets/img/goodfirms.svg" alt="" />
                        {/* <h4 className="counter-min-heading">Employers</h4> */}
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">star</i>
                        </div>
                        <div className="counter-min-numb"><span className="" data-from="0" data-to="2">4.7</span></div>
                    </div>
                    <div className="counter-min-info">
                        <img src="./assets/img/google.webp" width={130} alt="" />
                        {/* <h4 className="counter-min-heading">Apps Developed</h4> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
