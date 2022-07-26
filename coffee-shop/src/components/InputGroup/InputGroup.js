import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './InputGroup.module.scss';

const cx = classNames.bind(styles);

function InputGroup({placeholder, icon, ...props}) {
    return ( 
        <div className={cx('formGroup')}>
            <input {...props} placeholder={placeholder}/>
            <span className={cx('icon')}>
                {icon}
            </span>
        </div>
     );
}

InputGroup.propTypes = {
    placeholder: PropTypes.string,
    icon: PropTypes.node
}

export default InputGroup;