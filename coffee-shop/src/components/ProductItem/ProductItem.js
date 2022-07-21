import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItem({
    image,
    to,
    tittle,
    price,
    }) {

    return ( 
        <div className={cx("product__item")}>
            <Link to={to}>
                <div className={cx("product__image")}>
                    <img src={image} alt=""/>
                </div>
                <h5>{tittle}</h5>
            </Link>
            <span className={cx("product__price")}>{price}</span>
            <Link to={to} className={cx("product__add-cart")}>Add to cart</Link>
        </div>
    );
}

export default ProductItem;