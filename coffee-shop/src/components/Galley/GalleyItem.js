import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './Galley.module.scss';

const cx = classNames.bind(styles);

function GalleyItem({image, title, className, to, page = "default", children}) {
    // const Tag = "h3";
    // useMemo(() => {
    //     if (pahe === "about") {

    //     }
    // }, [page])
    return ( 
        <div className={cx("galley__item", className)}>
            <div className={cx("galley__image")}>
                <img src={image} alt=""/>
            </div>
            <Link to={to} className={cx("galley__drop")}>
                <h3>{title}</h3>
            </Link>
        </div>
    );
}

export default GalleyItem;