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
                            <i className="material-icons material-icons-outlined md-36">history</i>
                        </div>
                        <div className="counter-min-numb spincrement" data-from="0" data-to="10">0</div>
                    </div>
                    <div className="counter-min-info">
                        <h4 className="counter-min-heading">Years Of Experience</h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">chat</i>
                        </div>
                        <div className="counter-min-numb spincrement" data-from="0" data-to="40">0</div>
                    </div>
                    <div className="counter-min-info">
                        <h4 className="counter-min-heading">Consultans</h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">assignment_ind</i>
                        </div>
                        <div className="counter-min-numb spincrement" data-from="0" data-to="160">0</div>
                    </div>
                    <div className="counter-min-info">
                        <h4 className="counter-min-heading">Employers</h4>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 col-12 item">
                <div className="counter-min">
                    <div className="counter-min-block">
                        <div className="counter-min-ico">
                            <i className="material-icons material-icons-outlined md-36">phonelink_setup</i>
                        </div>
                        <div className="counter-min-numb"><span className="spincrement" data-from="0" data-to="2">0</span>K</div>
                    </div>
                    <div className="counter-min-info">
                        <h4 className="counter-min-heading">Apps Developed</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
