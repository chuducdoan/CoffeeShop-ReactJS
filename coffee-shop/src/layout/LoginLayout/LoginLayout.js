import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <div className={cx('login__body')}>
                        <div className={cx('login__formGroup')}>
                            <input type="text" placeholder="Email"/>
                            <span className={cx('login__icon')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('fa')}/>
                            </span>
                        </div>
                        <div className={cx('login__formGroup')}>
                            <input type="text" placeholder="Password"/>
                            <span className={cx('login__icon')}>
                                <i className="fa fa-lock" aria-hidden="true"></i>
                                <FontAwesomeIcon icon={faLock} className={cx('fa')}/>
                            </span>
                        </div>
                    </div>
                    <div className={cx('login__footer')}>
                        <div className={cx('login__other')}>
                            <hr/>
                            <span className={cx('login__other-text')}>Or Login with</span>
                            <hr/>
                        </div>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    </div>
            </div>
            {children}
        </div>
    );
}

export default LoginLayout;