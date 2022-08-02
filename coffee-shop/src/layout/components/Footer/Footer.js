import classNames from 'classnames/bind';
import '@fortawesome/fontawesome-free/css/all.min.css';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <footer className={cx("footer")}>
            <div className={cx("footer__top")}>
                <div className={cx("footer__logo")}>
                    <Link to={"/"}>
                        <img src="assets/images/logo.png" alt=""/>
                    </Link>
                </div>
                <div className={cx("footer__info")}>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                    <p>nostrud exercitation ullamco laboris.”</p>
                </div>
                <div className={cx("footer__adress")}>
                    <h5>STORES</h5>
                    <Link to={"/"}>
                        <span>Dunsmuir Ave, Los Angeles, CA 90036, USA</span>
                    </Link>
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
                                    <Link to={config.routes.home}>Home</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.about}>About</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.productList}>Shop</Link>
                                </li>
                                <li>
                                    <Link to={config.routes.contact}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-sm-12 col-lg-4 ${cx("footer__item")}`}>
                        <div className={cx("footer__social")}>
                            <ul>
                                <li>
                                    <Link to={"/"}>
                                        <span className="icon icon__instagram">
                                            <i className="fa-brands fa-instagram"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"}>
                                        <span className="icon icon__twitter">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/"}>
                                        <span className="icon icon__facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </span>
                                    </Link>
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