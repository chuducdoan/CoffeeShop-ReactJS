import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <div className={cx("header-wrap")}>
            <header className={cx("header")}>
                <div className={cx("header__left")}>
                    <a href="">
                        <img src="assets/images/logo.png" alt=""/>
                    </a>
                </div>
                <div className={cx("header__right")}>
                    <nav className={cx("header__menu")}>
                        <ul>
                            <li className={cx("active")}>
                                <a href="">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Shop</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={cx("header__cart")}>
                        <span>
                            <i className={cx("icon-cart")}></i>
                        </span>
                        <span className={cx("header__cart-number")}>2</span>
                    </div>
                </div>
            </header>
            <header className={cx("header-mobile")}>
                <div className={cx("header-mobile__left")}>
                    <a href="">
                        <span className={cx("icon header-mobile__bar")}></span>
                    </a>
                </div>
                <div className={cx("header-mobile__right")}>
                    <a href="#">
                        <img src="../images/logo-mobile.png" alt=""/>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default Header;