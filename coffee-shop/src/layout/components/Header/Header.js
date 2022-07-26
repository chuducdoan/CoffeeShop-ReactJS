import '@fortawesome/fontawesome-free/css/all.min.css';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { logout, setEmail, setPassword } from '~/action';
import Button from '~/components/Button';
import Popper from '~/components/Popper';
import config from '~/config';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    const user = useSelector(state => state.authRed.user);
    const dispatch = useDispatch();

    console.log(user)

    const handleLogout = () => {
        dispatch(logout());
        dispatch(setEmail(''));
        dispatch(setPassword(''));
    }

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
                                <Tippy
                                interactive
                                delay={[0, 500]}
                                render={(attrs) => (
                                    <div {...attrs}>
                                        <Popper small>
                                            <a>{user.displayName || user.email}</a>
                                            <a onClick={handleLogout} className={cx('logout')}>
                                                <span>Log out</span>
                                            </a>
                                        </Popper>
                                    </div>
                                )}
                                >
                                    <li>
                                        <a className={cx("username")}>
                                            <img src={user.photoURL} />
                                        </a>
                                    </li>
                                </Tippy>
                            ) : (
                                <>
                                    <li>
                                        <Link to={config.routes.login}>
                                            <span>Sign in</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={config.routes.signUp}>
                                            <span>Sign up</span>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                    <Tippy
                    interactive
                    delay={[0, 300]}
                    render={(attrs) => (
                        <div className={cx('menu-list')} {...attrs}>
                            <Popper>
                                <ul>
                                    <li>
                                        <div className={cx("left__product-item")}>
                                            <a href="" className={cx("image")}>
                                                <img src="assets/images/product3.png" alt=""/>
                                            </a>
                                            <div className={cx("left__product-content")}>
                                                <a href="" className={cx('product__title')}>
                                                    <span>Columbia Coffee</span>
                                                </a>
                                                <div className={cx("quantity")}>
                                                    <span className={cx("quantity__lable")}>Quantity:</span><span>2</span>
                                                </div>
                                                <span className={cx("price")}>$25.00</span>
                                            </div>
                                            <span className={cx("close")}>
                                                <i className="fa fa-times"></i>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={cx("left__product-item")}>
                                            <a href="" className={cx("image")}>
                                                <img src="assets/images/product3.png" alt=""/>
                                            </a>
                                            <div className={cx("left__product-content")}>
                                                <a href="" className={cx('product__title')}>
                                                    <span>Columbia Coffee</span>
                                                </a>
                                                <div className={cx("quantity")}>
                                                    <span className={cx("quantity__lable")}>Quantity:</span><span>2</span>
                                                </div>
                                                <span className={cx("price")}>$25.00</span>
                                            </div>
                                            <span className={cx("close")}>
                                                <i className="fa fa-times"></i>
                                            </span>
                                        </div>
                                    </li>
                                    <li className={cx("cart__bottom")}>
                                        <div className={cx("cart__subtotal")}>
                                            <span className="eltdf-total">TOTAL:</span>
                                            <span className="eltdf-total-amount">
                                                <span className="woocommerce-Price-amount amount"><span className="woocommerce-Price-currencySymbol">$</span>64.00</span>
                                            </span>
                                        </div>
                                        <div>
                                            <Button buttonText secondary fullWidth to={config.routes.cart}>View Cart</Button>
                                        </div>
                                    </li>
                                </ul>
                            </Popper>
                        </div>
                    )}
                    >
                        <div className={cx("header__cart")}>
                            <span>
                                <i className={cx("icon-cart")}></i>
                            </span>
                            <span className={cx("header__cart-number")}>2</span>
                        </div>
                    </Tippy>
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