import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decreaseToCart, increaseToCart, removeCart } from "~/action";
import Banner from "~/components/Banner";
import Button from "~/components/Button";
import config from "~/config";
import { getTotalCart } from "~/util";

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {

    const carts = useSelector(state => state.cartRed.Carts);
    const dispatch = useDispatch();

    const handleIncreaseToCart = (cartId) => {
        dispatch(increaseToCart(cartId));
    }

    const handleRemoveCartItem = (cartId) => {
        dispatch(removeCart(cartId));
    }

    const handleDecreaseToCart = (cartId) => {
        dispatch(decreaseToCart(cartId));
    }

    return ( 
        <div>
            <Banner cart>
                <h1>Cart</h1>
            </Banner>
            <section className={cx("cart")}>
                <div className={cx("grid")}>
                    {carts.length > 0 ? (
                        <div>
                            <div className={cx("cart-content")}>
                                <div action="">
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
                                            {carts.map((cart, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <span className={cx("close")} onClick={() => handleRemoveCartItem(cart.id)}>
                                                            <i className="fa fa-times"></i>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className={cx('image')}>
                                                            <img src={cart.image} alt={cart.name}/>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link to={`${config.routes.productDetail}/${cart.id}`}>{cart.name}</Link>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span>$</span><span>{cart.price}</span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className={cx("product-detail__group-form")}>
                                                            <input type="text" value={cart.quantity} readOnly/>
                                                            <div className={cx("product-detail__quantity")}>
                                                                <button className={cx("add")} onClick={() => handleIncreaseToCart(cart.id)}>+</button>
                                                                <button className={cx("sup")} disabled={cart.quantity === 1} onClick={() => handleDecreaseToCart(cart.id)}>-</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <span>$</span><span>{cart.quantity * cart.price}</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={cx("cart-collaterals")}>
                                <h2>Cart totals</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>
                                                <span>
                                                    <span>$</span><span>{getTotalCart(carts)}</span>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>
                                                <p>
                                                    Free shipping
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td>
                                                <span>
                                                    <span>$</span><span>{getTotalCart(carts)}</span>
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
                    ) : (
                        <div className={cx('empty-cart')}>
                            <div>
                                <img src="./assets/images/empty-cart.png" alt="empty cart"/>
                            </div>
                            <p>There are no products in your shopping cart.</p>
                            <Button to={config.routes.productList} buttonText secondary small>Continue shopping</Button>
                        </div>
                    )}
                </div>
            </section>
        </div>
     );
}

export default Cart;