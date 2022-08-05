import classNames from "classnames/bind";

import config from "~/config/index.js";
import Button from "../Button/Button.js";
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({
    title, 
    home, 
    about, 
    contactUs, 
    ourMenu, 
    cart,
    productList,
    checkout, 
    children}) {

    const classes = cx('banner', {
        about,
        contactUs,
        ourMenu,
        cart,
        checkout,
        productList
    });

    return (
        <div className={classes}>
                <div className={cx("banner__resp")}>
                    <div className={cx("banner__resp-top", "hidden-sm", "hidden-ms", "hidden-xs")}>
                    </div>
                    <div className={cx("banner__resp-mid", "hidden-xl", "hidden-lg", "hidden-md", "hidden-xs")}></div>
                    <div className={cx("banner__resp-bottom", "visible-xs")}></div>
                </div>
                <div className={cx("banner__image-text")}>
                    {children}
                </div>
                <div className={cx("banner__button")}>
                    {home && <Button buttonText primary to={config.routes.productList}>{title}</Button>}
                </div>
                <div className={cx("banner__resp")}>
                    <div className={cx("banner__resp-top", "hidden-sm", "hidden-ms", "hidden-xs")}>
                    </div>
                    <div className={cx("banner__resp-mid", "hidden-xl", "hidden-lg", "hidden-md", "hidden-xs")}></div>
                    <div className={cx("banner__resp-bottom", "visible-xs")}></div>
                </div>
            </div>
    );
}

export default Banner;