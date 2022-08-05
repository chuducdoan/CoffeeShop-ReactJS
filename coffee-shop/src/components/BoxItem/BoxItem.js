import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './BoxItem.module.scss';

const cx = classNames.bind(styles);

function BoxItem({
    image,
    to,
    description,
    }) {

    return ( 
        <div className={cx("box")}>
            <div className={cx("box__image")}>
                <Link to={to}>
                    <img src={image} alt=""/>
                </Link>
            </div>
            <h5>
                <Link to={to}>
                    Types of Coffee
                </Link>
            </h5>
            <p>
                {description}
            </p>
        </div>
    );
}

export default BoxItem;