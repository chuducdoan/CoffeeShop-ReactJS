import classNames from 'classnames/bind';

import styles from './Textarea.module.scss';

const cx = classNames.bind(styles);

function InputGroup({placeholder}) {
    return ( 
        <div>
            <textarea className={cx("c-form", "c-form__textarea")} cols="30" rows="10" placeholder={placeholder}></textarea>
        </div>
     );
}

export default InputGroup;