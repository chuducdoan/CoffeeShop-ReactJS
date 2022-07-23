import classNames from 'classnames/bind';

import styles from './TextWrapper.module.scss';

const cx = classNames.bind(styles);

function TextWrapper({
    tittle,
    description,
    className,
    children
    }) {

    return ( 
        <div className={cx(className)}>
            <div className={cx("content-item")}>
                <h2>
                    {tittle}
                </h2>
                <div className={cx("content-item__image")}>
                    <img src="assets/images/title-separator.png" alt=""/>
                </div>
                <h6>
                    {description}
                </h6>
                {children}
            </div>
        </div>
    );
}

export default TextWrapper;