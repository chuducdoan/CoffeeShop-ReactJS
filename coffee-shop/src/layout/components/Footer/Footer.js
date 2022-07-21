import classNames from 'classnames/bind';
import '@fortawesome/fontawesome-free/css/all.min.css';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <footer className={cx("footer")}>
            <div className={cx("footer__top")}>
                <div className={cx("footer__logo")}>
                    <a href="">
                        <img src="assets/images/logo.png" alt=""/>
                    </a>
                </div>
                <div className={cx("footer__info")}>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <p>nostrud exercitation ullamco laboris.”</p>
                </div>
                <div className={cx("footer__adress")}>
                    <h5>STORES</h5>
                    <a href="">
                        <span>Dunsmuir Ave, Los Angeles, CA 90036, USA</span>
                    </a>
                </div>
            </div>
            <div className={cx("footer__bottom")}>
                <div className={`row ${cx("footer--inner")}`}>
                    <div className={`col-sm-12 col-lg-4 ${cx("footer__item")}`}>
                        <div className={cx("footer__copyright")}>
                            <p>© 2018 Qode Interactive, All Rights Reserved</p>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-lg-4 ${cx("footer__item")}`}>
                        <div className={cx("footer__menu")}>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="">Shop</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-lg-4 ${cx("footer__item")}`}>
                        <div className={cx("footer__social")}>
                            <ul>
                                <li>
                                    <a href="">
                                        <span className="icon icon__instagram">
                                            <i className="fa-brands fa-instagram"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="icon icon__twitter">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="icon icon__facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Header;