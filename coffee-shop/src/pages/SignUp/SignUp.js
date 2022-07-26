import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import InputGroup from '~/components/InputGroup';
import { Link, useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from "react-redux";

import styles from './SignUp.module.scss';
import {UserAuth} from '~/context/AuthContext';
import config from '~/config';
import { useEffect } from 'react';
import Button from '~/components/Button';
import { setEmail, setFullname, setPassword, setUser } from '~/action';

const cx = classNames.bind(styles);

function SignUp() {
    const user = useSelector(state => state.authRed.user);
    const email = useSelector(state => state.authRed.email);
    const password = useSelector(state => state.authRed.password);
    const fullname = useSelector(state => state.authRed.fullName);
    const dispatch = useDispatch();

    const {signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await signUp(email, password, fullname);
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
                <InputGroup placeholder='Full Name' icon={<FontAwesomeIcon icon={faUser}/>} value={fullname} onChange={(e) => dispatch(setFullname(e.target.value))}/>
                <InputGroup placeholder='Email Address' icon={<FontAwesomeIcon icon={faEnvelope}/>} value={email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
                <InputGroup placeholder='Password' type="password" icon={<FontAwesomeIcon icon={faLock}/>} value={password} onChange={(e) => dispatch(setPassword(e.target.value))}/>
                <div className={cx('login__button')}>
                    <Button buttonText fullWidth primary handleOnClick={handleSignUp}>Sign up</Button>
                </div>
            </div>
            <div className={cx('login__footer')}>
                <div className={cx('login__other')}>
                    <hr/>
                    <span className={cx('login__other-text')}>Or Sign up with</span>
                    <hr/>
                </div>
                <div className={cx('login__social')}>
                    <Button buttonIconsRounded buttonIconGoogle>
                        <i className="fa-brands fa-google"></i>
                    </Button>
                    <Button buttonIconsRounded buttonIconFacebook>
                        <i className="fa-brands fa-facebook-f"></i>
                    </Button>
                    <Button buttonIconsRounded buttonIconTwitter>
                        <i className="fab fa-twitter"></i>
                    </Button>
                </div>
                <div className={cx('login__exist')}>
                    Already a member <Link to={config.routes.login}>Login now</Link>
                </div>
            </div>
        </div>
     );
}

export default SignUp;