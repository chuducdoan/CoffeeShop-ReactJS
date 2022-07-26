import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import InputGroup from '~/components/InputGroup';
import { useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { connect, useDispatch, useSelector } from "react-redux";

import styles from './Login.module.scss';
import {UserAuth} from '~/context/AuthContext';
import config from '~/config';
import { useEffect } from 'react';
import Button from '~/components/Button';
import { setEmail, setPassword } from '~/action';

const cx = classNames.bind(styles);

function Login() {
    const user = useSelector(state => state.authRed.user);
    const email = useSelector(state => state.authRed.email);
    const password = useSelector(state => state.authRed.password);
    const dispatch = useDispatch();
    const {googleSignIn, facebookSignIn, signIn} = UserAuth();
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

    const handleSignin = async () => {
        try {
            await signIn(email, password);
        } catch(error) {
            console.log(error);
            // log message login fail
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
            <InputGroup placeholder='Email Address' icon={<FontAwesomeIcon icon={faEnvelope}/>} value={email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
                <InputGroup placeholder='Password' type="password" icon={<FontAwesomeIcon icon={faLock}/>} value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
                <div className={cx('login__button')}>
                    <Button buttonText fullWidth primary handleOnClick={handleSignin}>Sign in</Button>
                </div>
            </div>
            <div className={cx('login__footer')}>
                <div className={cx('login__other')}>
                    <hr/>
                    <span className={cx('login__other-text')}>Or Login with</span>
                    <hr/>
                </div>
                <div className={cx('login__social')}>
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