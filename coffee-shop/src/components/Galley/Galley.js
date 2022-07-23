import classNames from "classnames/bind";

import styles from './Galley.module.scss';
import GalleyItem from "./GalleyItem";

const cx = classNames.bind(styles);

function Galley({galleys}) {
    return ( 
        <div className={cx("galley")}>
            <div className={cx("galley__wrap")}>
                {galleys.map((value, key) => (
                    <GalleyItem key={key} title={value.title} image={value.image} to='#'/>
                ))}
            </div>
        </div>
    );
}

export default Galley;