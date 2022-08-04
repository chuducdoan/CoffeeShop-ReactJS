import '@fortawesome/fontawesome-free/css/all.min.css';
import classNames from "classnames/bind";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { addCart } from '~/action';
import productApi from "~/api/productApi";
import Banner from "~/components/Banner";
import Button from "~/components/Button";
import ProductItem from "~/components/ProductItem";
import config from "~/config";
import styles from './ProductDetail.module.scss';
import {ToastContainer} from 'react-toastify';

const cx = classNames.bind(styles);

function ProductDetail() {
    const user = useSelector(state => state.authRed.user);
    const {productId} = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [productDetail, setProductDetail] = useState({});
    const [images, setImages] = useState([]);
    const [numberProduct, setNumberProduct] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            const fetchProductDetail = async () => {
                const response = await productApi.get(productId);
                const params = {
                    id_ne: productId,
                    categoryId: response.categoryId
                }
                const res = await productApi.getAll(params);
                setProductDetail(response);
                setRelatedProducts(res)
            }
            const fetchImagesByProduct = async () => {
                const response = await productApi.getImagesByProduct(productId);
                setImages(response);
            }
            fetchProductDetail();
            fetchImagesByProduct();
        } catch(error) {
            console.log(error);
        }
    }, [productId]);

    const handleAddToCart = (product) => {
        if (!user || user === null) {
            navigate(config.routes.login);
            return;
        }
        dispatch(addCart(product));
    }

    const handleIncreaseProduct = () => {
        setNumberProduct(state => state + 1);
    }

    const handleDecreaseProduct = () => {
        if (numberProduct <= 1) return;
        setNumberProduct(state => state - 1);
    }

    const handleAddToCartByProductDetail = () => {
        dispatch(addCart({...productDetail, qty: numberProduct}));
        setNumberProduct(1);
    }

    return ( 
        <div>
            <Banner productList>
                <h1>Product Detail</h1>
            </Banner>
            <section className={cx("product-detail")}>
                <div className="grid row">
                    <ToastContainer/>
                    <div className="col-xl-6">
                        <div className={cx("product-detail__left")}>
                            <div className={cx("product-detail__image")}>
                                <img src={productDetail.thumnailUrl} alt={productDetail.name}/>
                            </div>
                            {images.map((image, index) => (
                                <div className={cx("product-detail__image")}>
                                    <img src={image.thumnailUrl} alt={image.name}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className={cx("product-detail__right")}>
                            <h3 className={cx("product-detail__title")}>{productDetail.name}</h3>
                            <p className={cx("product-detail__price")}>
                                <span>
                                    <span>$</span><span>{productDetail.price}</span>
                                </span>
                            </p>
                            <p className={cx("product-detail__description")}>
                                {productDetail.description}
                            </p>
                            <div className={cx("product-detail__cart")}>
                                <div className={cx("product-detail__group-form")}>
                                    <input type="text" value={numberProduct} readOnly/>
                                    <div className={cx("product-detail__quantity")}>
                                        <button className={cx("add")} onClick={handleIncreaseProduct}>+</button>
                                        <button className={cx("sup")} onClick={handleDecreaseProduct}>-</button>
                                    </div>
                                </div>
                                <Button buttonText secondary handleOnClick={handleAddToCartByProductDetail}>Add To Cart</Button>
                            </div>
                            <div className={cx("product-detail__meta")}>
                                <div>
                                    <span className={cx("label")}>SKU:</span>
                                    <span>PR111-1</span>
                                </div>
                                <div>
                                    <span className={cx("label")}>Category:</span>
                                    <span>
                                        <Link to={"/"}>Accessories</Link>
                                    </span>
                                </div>
                                <div  className={cx("d-flex")}>
                                    <span className={cx("label")}>Share:</span>
                                    <div className={cx("footer__social")}>
                                        <ul>
                                            <li>
                                                <Link to={"/"}>
                                                    <i className={`fa-brands fa-instagram ${cx("icon")}`}></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    <i className={`fab fa-twitter ${cx("icon")}`}></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={"/"}>
                                                    <i className={`fa-brands fa-facebook-f ${cx("icon")}`}></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("product-detail__tablist")}>
                                <ul>
                                    <li className={cx("product-detail__tab", "active")}>
                                        <button>Description</button>
                                    </li>
                                    <li className={cx("product-detail__tab")}>
                                        <button>Additional information</button>
                                    </li>
                                    <li className={cx("product-detail__tab")}>
                                        <button>Review(1)</button>
                                    </li>
                                </ul>
                                <div className={cx("product-detail__tabcontent")}>
                                    <div id="tab-1">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                    </div>
                                    <div id="tab-2">
                                        <div>
                                            <span>Weight: </span>
                                            <span>2kg</span>
                                        </div>
                                    </div>
                                    <div id="tab-3">
                                        <p>1 REVIEW FOR FRENCH PRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               <div className={cx("product-rate")}>
                    <div className={"grid row"}>
                        <div className="col-12">
                            <h2>RELATED PRODUCTS</h2>
                        </div>
                        {relatedProducts && relatedProducts.map((product, index) => (
                            <div className="col-sm-6 col-md-4 col-xl-3" key={index}>
                                <ProductItem
                                    to={`${config.routes.productDetail}/${product.id}`}
                                    product={product}
                                    handleOnClick={() => handleAddToCart(product)}
                                    />
                            </div>
                        ))}
                    </div>
               </div>
            </section>
        </div>
     );
}

export default ProductDetail;