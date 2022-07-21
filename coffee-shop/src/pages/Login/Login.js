import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import InputGroup from '~/components/InputGroup';
import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

import styles from './Login.module.scss';
import {UserAuth} from '~/context/AuthContext';
import config from '~/config';
import { useEffect } from 'react';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Login() {
    const {googleSignIn, facebookSignIn, user} = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    }

    const handleFacebookGignIn = async () => {
        try {
            await facebookSignIn();
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user != null) {
            navigate(config.routes.home);
            console.log('effect render lan 1', user)
        }
    }, [user]);

    return ( 
        <div>
            <div className={cx('login__body')}>
                <InputGroup placeholder='Email' icon={<FontAwesomeIcon icon={faEnvelope}/>}/>
                <InputGroup placeholder='Password' icon={<FontAwesomeIcon icon={faLock}/>}/>
            </div>
            <div className={cx('login__footer')}>
                <div className={cx('login__other')}>
                    <hr/>
                    <span className={cx('login__other-text')}>Or Login with</span>
                    <hr/>
                </div>
                <div className={cx('login__social')}>
                    {/* <button className={cx('social-icons-rounded')} onClick={handleGoogleSignIn}>
                        <i className="fa-brands fa-google"></i>
                    </button> */}
                    <Button buttonIconsRounded buttonIconGoogle handleOnClick={handleGoogleSignIn}>
                        <i className="fa-brands fa-google"></i>
                    </Button>
                    <Button buttonIconsRounded buttonIconFacebook handleOnClick={handleFacebookGignIn}>
                        <i className="fa-brands fa-facebook-f"></i>
                    </Button>
                    <Button buttonIconsRounded buttonIconTwitter handleOnClick={handleGoogleSignIn}>
                        <i className="fab fa-twitter"></i>
                    </Button>
                </div>
            </div>
        </div>
     );
}

export default Login;