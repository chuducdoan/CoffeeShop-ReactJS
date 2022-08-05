import classNames from "classnames/bind";

import Banner from "~/components/Banner";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Textarea from "~/components/Textarea";
import style from './Contact.module.scss';

const cx = classNames.bind(style);

function Contact() {
    return ( 
        <>
            <Banner title="About Me" contactUs>
                <h1>Contact Us</h1>
            </Banner>
            <section className={cx("contact-us")}>
                <div className="grid row">
                    <div className="col-lg-6">
                        <div className={cx("contact-item")}>
                            <h3 className={cx("contact__title")}>Get In Contact</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
                            <ul>
                                <li>Duis aute irure dolor</li>
                                <li>In reprehenderit in</li>
                                <li>Voluptate velit esse</li>
                                <li>Illum dolore eu fugiat nulla pariatur.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={cx("contact-item")}>
                            <div className={cx("contact__group-form", "contact--votical")}>
                                <Input placeholder="Your Name"/>
                                <Input placeholder="Your Email" />
                            </div>
                            <div className={cx("contact__group-form")}>
                                <Input placeholder="Subject" />
                            </div>
                            <div className={cx("contact__group-form")}>
                                <Textarea placeholder="Message here..."/>
                            </div>
                            <div className={cx("contact__group-form")}>
                                <Button secondary buttonText>Send Message</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("contact__map")}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5267.216700375652!2d105.80098621219773!3d21.013285538801576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5f7e8677a7%3A0xe8e81820d9c9ed9b!2sUniversity%20of%20Labour%20%26%20Social%20Affairs%20(ULSA)!5e0!3m2!1sen!2s!4v1654787615814!5m2!1sen!2s"
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
     );
}

export default Contact;