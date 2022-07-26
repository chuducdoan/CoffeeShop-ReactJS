import classNames from 'classnames/bind';
import Header from '~/layout/components/Header';

import Footer from '~/layout/components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {

    return ( 
        <div>
            <Header/>
            <div className={cx('container')}>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;