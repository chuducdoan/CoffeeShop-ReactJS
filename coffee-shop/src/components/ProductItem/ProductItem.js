import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({
    to,
    product
    }) {

    return ( 
        <div className={cx("product__item")}>
            <Link to={to}>
                <div className={cx("product__image")}>
                    <img src={product.thumnailUrl} alt={product.name}/>
                </div>
                <h5>{product.name}</h5>
            </Link>
            <span className={cx("product__price")}>${product.price}</span>
            <Link to={to} className={cx("product__add-cart")}>Add to cart</Link>
        </div>
    );
}

export default ProductItem;