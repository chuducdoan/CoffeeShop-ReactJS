import '@fortawesome/fontawesome-free/css/all.min.css';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import InputGroup from '~/components/InputGroup';

import { useEffect, useState } from 'react';
import { setEmail, setPassword } from '~/action';
import Button from '~/components/Button';
import config from '~/config';
import { ERROR_LOGIN, MESSAGE_VALIDATE_FORMAT_EMAIL, MESSAGE_VALIDATE_LENGTH_PASSWORD, MESSAGE_VALIDATE_REQUIRE_EMAIL, MESSAGE_VALIDATE_REQUIRE_PASSWORD } from '~/constant';
import { UserAuth } from '~/context/AuthContext';
import { validateEmailFormat, validateLength, validateRequired } from '~/util';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const user = useSelector(state => state.authRed.user);
    const email = useSelector(state => state.authRed.email);
    const password = useSelector(state => state.authRed.password);
    const [messages, setMessages] = useState([]);
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
        const listMessage = [];
        try {
            if (validateRequired(email)) {
                listMessage.push(MESSAGE_VALIDATE_REQUIRE_EMAIL);
            } else if (validateEmailFormat(email)) {
                listMessage.push(MESSAGE_VALIDATE_FORMAT_EMAIL);
            }
            if (validateRequired(password)) {
                listMessage.push(MESSAGE_VALIDATE_REQUIRE_PASSWORD);
            } else if (validateLength(password, 4, 8)) {
                listMessage.push(MESSAGE_VALIDATE_LENGTH_PASSWORD(4,8));
            }
            if (listMessage.length <= 0) {
                await signIn(email, password);
            }
        } catch(error) {
            console.log(error);
            listMessage.push(ERROR_LOGIN);
        } 
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        setMessages(listMessage);
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
            {messages.length > 0 && (
                <div className={cx('wrap__error')}>
                    {messages.map((error, index) => (
                        <p className='message__error' key={index}>{error}</p>
                    ))}
                </div>
            )}
            
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