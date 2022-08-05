import classNames from "classnames/bind";

import Banner from "~/components/Banner";
import Button from "~/components/Button";
import Input from "~/components/Input";

import styles from './Checkout.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return ( 
        <div>
            <Banner checkout>
                <h1>Checkout</h1>
            </Banner>
            <section className={cx("cart")}>
            <div className="grid row">
                <div className="col-md-6 col-xl-6">
                    <div className={cx("checkout__item")}>
                        <h3>Billing details</h3>
                       <div className={cx("form-group--2")}>
                            <div>
                                <label for="firstName">First name</label>
                                <Input/>
                            </div>
                            <div>
                                <label for="firstName">First name</label>
                                <Input/>
                            </div>
                       </div>
                        <div className="form-group">
                            <label for="firstName">Company name</label>
                            <Input/>
                        </div>
                        <div className="form-group">
                            <label for="country">Country</label>
                            <Input/>
                        </div>
                        <div className="form-group">
                            <label for="street">Street address</label>
                            <Input/>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <Input/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <Input/>
                        </div>
                    </div>
                    <div className="checkout__item">
                        <h3>Ship To A Different Address?</h3>
                        
                    </div>
                </div>
                <div className="col-md-6 col-xl-6">
                    <div className={cx("checkout__item", "cart-collaterals")}>
                        <h3>Your Order</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        French Press
                                        <strong className="quantity">x 1</strong>
                                    </td>
                                    <td>
                                        <span>
                                            <span>$</span>23
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        French Press
                                        <strong className="quantity">x 1</strong>
                                    </td>
                                    <td>
                                        <span>
                                            <span>$</span>23
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        French Press
                                        <strong className="quantity">x 1</strong>
                                    </td>
                                    <td>
                                        <span>
                                            <span>$</span>23
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
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
                                        <p>Enter your full address to see shipping costs.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td>
                                        <strong>
                                            <span>
                                                <span>$</span>65.00
                                            </span>
                                        </strong>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className={cx("checkout__place-holder")}>
                            <Button buttonText secondary>Place Order</Button>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
     );
}

export default Cart;