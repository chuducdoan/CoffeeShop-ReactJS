import { Link } from 'react-router-dom';
import config from '~/config';
import {UserAuth} from '~/context/AuthContext';
import Header from '~/layout/components/Header';
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Footer from '~/layout/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    const {user, logOut} = UserAuth();

    console.log('uer home: ', user)
    
    const hanldeLogout = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div>
            <Header/>
            {user?.displayName && user.displayName}
            {/* <header style={{backgroundColor: 'red'}}>
                {user !== null ? <button onClick={hanldeLogout}>Logout</button> : <Link to={config.routes.login} title="Login">Login</Link>}
            </header> */}
            <div className={cx('container')}>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;