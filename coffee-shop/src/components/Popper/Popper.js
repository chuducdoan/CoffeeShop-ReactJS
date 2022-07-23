import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from 'classnames/bind';
import Button from '../Button';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Popper() {

    return ( 
        <div className={cx("wrapper")}>
           <ul>
              <li>
                <div className={cx("left__product-item")}>
                    <a href="" className={cx("image")}>
                        <img src="assets/images/product3.png" alt=""/>
                    </a>
                    <div className={cx("left__product-content")}>
                        <a href="" className={cx('product__title')}>
                            <span>Columbia Coffee</span>
                        </a>
                        <div className={cx("quantity")}>
                            <span className={cx("quantity__lable")}>Quantity:</span><span>2</span>
                        </div>
                        <span className={cx("price")}>$25.00</span>
                    </div>
                    <span className={cx("close")}>
                        <i className="fa fa-times"></i>
                    </span>
                </div>
              </li>
              <li>
                <div className={cx("left__product-item")}>
                    <a href="" className={cx("image")}>
                        <img src="assets/images/product3.png" alt=""/>
                    </a>
                    <div className={cx("left__product-content")}>
                        <a href="" className={cx('product__title')}>
                            <span>Columbia Coffee</span>
                        </a>
                        <div className={cx("quantity")}>
                            <span className={cx("quantity__lable")}>Quantity:</span><span>2</span>
                        </div>
                        <span className={cx("price")}>$25.00</span>
                    </div>
                    <span className={cx("close")}>
                        <i className="fa fa-times"></i>
                    </span>
                </div>
              </li>
              <li className={cx("cart__bottom")}>
                <div className={cx("cart__subtotal")}>
                    <span class="eltdf-total">TOTAL:</span>
                    <span class="eltdf-total-amount">
						<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>64.00</span>
                    </span>
                </div>
                <div>
                    <Button buttonText secondary fullWidth>View Cart</Button>
                </div>
              </li>
            </ul>
        </div>
    );
}

export default Popper;