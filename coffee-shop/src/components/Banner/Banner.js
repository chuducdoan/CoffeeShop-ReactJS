import classNames from "classnames/bind";
import Button from "../Button/Button.js";

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner({title, about, contactUs, ourMenu, children}) {
    const classes = cx('banner', {
        about,
        contactUs,
        ourMenu
    })
    return (
        <div className={classes}>
                <div className={cx("banner__resp")}>
                    <div className={cx("banner__resp-top", "hidden-sm", "hidden-ms", "hidden-xs")}>
                    </div>
                    <div className={cx("banner__resp-mid", "hidden-xl", "hidden-lg", "hidden-md", "hidden-xs")}></div>
                    <div className={cx("banner__resp-bottom", "visible-xs")}></div>
                </div>
                <div className={cx("banner__image-text")}>
                    {/* <img src="../images/home-2-logo-1.png" alt=""/> */}
                    {children}
                </div>
                <div className={cx("banner__button")}>
                    {/* <button className={cx("btn btn--primary")}>{title}</button> */}
                    <Button buttonText primary>{title}</Button>
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