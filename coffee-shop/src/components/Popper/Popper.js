import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({children, small, menuBar}) {

    return ( 
        <div className={cx("wrapper", {small, menuBar})}>
            {children}
        </div>
    );
}

export default Popper;