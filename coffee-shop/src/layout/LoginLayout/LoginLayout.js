import classNames from 'classnames/bind';

import styles from './LoginLayout.module.scss';

const cx = classNames.bind(styles);

function LoginLayout({children}) {

    return (
        <div className={cx('login__wrap')}>
            <div className={cx('login__backfit')}></div>
            <div className={cx('login__image')}></div>
            <div className={cx('login__content')}>
                <div className={cx('login__container')}>
                    <div className={cx('login__header')}>
                        <img src="./assets/images/logo.png" alt=""/>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;