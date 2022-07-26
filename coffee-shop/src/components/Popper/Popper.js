import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper({children, small}) {

    return ( 
        <div className={cx("wrapper", {small})}>
            {children}
        </div>
    );
}

export default Popper;