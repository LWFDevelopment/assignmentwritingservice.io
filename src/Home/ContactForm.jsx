import React from 'react'

export default function ContactForm() {
    return (
        <>
            <div class="section pt-0" id="contact">
                <div class="container">
                    <div class="row content-items">
                        <div class="col-12">
                            <div class="section-heading">
                                <div class="section-subheading">We are always in touch</div>
                                <h1>Contacts</h1>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-5 content-item">
                            <div class="contact-info section-bgc">
                                <h3>Get in Touch</h3>
                                <ul class="contact-list">
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">location_on</i>
                                        <div class="footer-contact-info">
                                            <a href="https://goo.gl/maps/2Ygp5S2Ssm1G5o329">
                                                4730 Crystal Springs Dr, Los Angeles, CA
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">smartphone</i>
                                        <div class="footer-contact-info">
                                            <a href="tel:+13239134688" class="formingHrefTel">+1 323-913-4688</a>
                                            <a href="tel:+13238884554" class="formingHrefTel">+1 323-888-4554</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">email</i>
                                        <div class="footer-contact-info">
                                            <a href="mailto:mail@example.com">mail@example.com</a>
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i class="material-icons material-icons-outlined md-22">schedule</i>
                                        <div class="footer-contact-info"><p>Mon - Fri: 9:00 - 18:00</p></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-7 content-item">
                            <form action="#!" method="post" class="form-submission contact-form contact-form-padding" novalidate>
                                <input type="hidden" name="Subject" value="Contact form"/>
                                    <div class="row gutters-default">
                                        <div class="col-12">
                                            <h3>Contact Form</h3>
                                        </div>
                                        <div class="col-xl-4 col-sm-6 col-12">
                                            <div class="form-field">
                                                <label for="contact-name" class="form-field-label">Full Name</label>
                                                <input type="text" class="form-field-input" name="Name" value="" autocomplete="off" id="contact-name" required data-pristine-required-message="This field is required."/>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-sm-6 col-12">
                                            <div class="form-field">
                                                <label for="contact-phone" class="form-field-label">Phone Number</label>
                                                <input type="tel" class="form-field-input mask-phone" name="Phone" value="" autocomplete="off" id="contact-phone" required data-pristine-required-message="This field is required."/>
                                            </div>
                                        </div>
                                        <div class="col-xl-4 col-12">
                                            <div class="form-field">
                                                <label for="contact-email" class="form-field-label">Email Address</label>
                                                <input type="email" class="form-field-input" name="Email" value="" autocomplete="off" id="contact-email" required data-pristine-required-message="This field is required." data-pristine-email-message="Please enter a valid email address."/>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-field">
                                                <label for="contact-message" class="form-field-label">Your Message</label>
                                                <textarea name="Message" class="form-field-input" id="contact-message" cols="30" rows="6"></textarea>
                                            </div>
                                            <div class="form-btn">
                                                <button type="submit" class="btn btn-w240 ripple"><span>Send Message</span></button>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
