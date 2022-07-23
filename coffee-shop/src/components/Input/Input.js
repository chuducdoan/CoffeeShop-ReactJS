import classNames from 'classnames/bind';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function InputGroup({placeholder, className}) {
    const classes = cx("c-form", "c-form__input", {"mb-0": className})
    return ( 
        <div>
            <input type="text" className={classes} placeholder={placeholder}/>
        </div>
     );
}

export default InputGroup;