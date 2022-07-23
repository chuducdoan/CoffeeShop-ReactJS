import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';
import config from '~/config';
import { UserAuth } from '~/context/AuthContext';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const {logOut, user} = UserAuth();

    return ( 
        <div className={cx("header-wrap")}>
            <header className={cx("header")}>
                <div className={cx("header__left")}>
                    <Link to={config.routes.home}>
                        <img src="assets/images/logo.png" alt=""/>
                    </Link>
                </div>
                <div className={cx("header__right")}>
                    <nav className={cx("header__menu")}>
                        <ul>
                            <li>
                                <NavLink className={(nav) => cx({active: nav.isActive})} to={config.routes.home}>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx({active: nav.isActive})} to={config.routes.about}>
                                    <span>About</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx({active: nav.isActive})} to={config.routes.productList}>
                                    <span>Shop</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx({active: nav.isActive})} to={config.routes.contact}>
                                    <span>Contact</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={(nav) => cx({active: nav.isActive})} to={config.routes.cart}>
                                    <span>Cart</span>
                                </NavLink>
                            </li>
                            {user ? (
                                <li>
                                    <Link onClick={logOut} to={"#"}>
                                        <span>Log out</span>
                                    </Link>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to={config.routes.login}>
                                            <span>Sign in</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}>
                                            <span>Sign up</span>
                                        </Link>
                                    </li>
                                </>
                            )}
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
                    <Link to={"#"}>
                        <i className="icon fa fa-bars"></i>
                    </Link>
                </div>
                <div className={cx("header-mobile__right")}>
                    <Link to={"#"}>
                        <img src="assets/images/logo-mobile.png" alt=""/>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;