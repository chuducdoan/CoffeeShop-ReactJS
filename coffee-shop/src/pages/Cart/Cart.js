import classNames from "classnames/bind";
import Banner from "~/components/Banner";
import Button from "~/components/Button";
import Input from "~/components/Input";
import config from "~/config";

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return ( 
        <div>
            <Banner cart>
                <h1>Cart</h1>
            </Banner>
            <section className={cx("cart")}>
                <div className={cx("grid")}>
                    <div className={cx("cart-content")}>
                        <form action="">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>
                                            Product
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>delete</td>
                                        <td>
                                            image
                                        </td>
                                        <td>
                                            <a href="">French Press</a>
                                        </td>
                                        <td>
                                            <span>
                                                <span>$</span>23.00
                                            </span>
                                        </td>
                                        <td>
                                            <div className={cx("product-detail__group-form")}>
                                                <input type="text" value="1"/>
                                                <div className={cx("product-detail__quantity")}>
                                                    <span className={cx("add")}>+</span>
                                                    <span className={cx("sup")}>-</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>
                                                <span>$</span>23.00
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6"> 
                                            <div className="d-flex">
                                                <Input placeholder="Coupon code..." className/>
                                                <Button buttonText secondary>Apply Coupon</Button>
                                                <Button buttonText secondary>Update cart</Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className={cx("cart-collaterals")}>
                        <h2>Cart totals</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Subtotal</th>
                                    <td>
                                        <span>
                                            <span>$</span>65.00
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Shipping</th>
                                    <td>
                                        <p>
                                            <a href="">Calculate shipping</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>
                                        <span>
                                            <span>$</span>65.00
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <Button buttonText secondary to={config.routes.checkout}>Proceed to checkout</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Cart;