import classNames from 'classnames/bind';

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

export default InputGroup;