import classNames from "classnames/bind";
import '@fortawesome/fontawesome-free/css/all.min.css';

import styles from './ProductDetail.module.scss';
import Banner from "~/components/Banner";
import Button from "~/components/Button";
import ProductItem from "~/components/ProductItem";
import config from "~/config";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import productApi from "~/api/productApi";

const cx = classNames.bind(styles);

function ProductDetail() {
    const {productId} = useParams();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [productDetail, setProductDetail] = useState({});

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
            fetchProductDetail();
        } catch(error) {
            console.log(error);
        }
    }, [productId]);

    return ( 
        <div>
            <Banner productList>
                <h1>Product Detail</h1>
            </Banner>
            <section className={cx("product-detail")}>
                <div className="grid row">
                    <div className="col-xl-6">
                        <div className={cx("product-detail__left")}>
                            <div className={cx("product-detail__image")}>
                                <img src={productDetail.thumnailUrl} alt={productDetail.name}/>
                            </div>
                            <div className={cx("product-detail__image")}>
                                <img src="assets/images/product-detail-4.jpg" alt=""/>
                            </div>
                            <div className={cx("product-detail__image")}>
                                <img src="assets/images/product-detail-2.jpg" alt=""/>
                            </div>
                            <div className={cx("product-detail__image")}>
                                <img src="assets/images/product-detail-3.jpg" alt=""/>
                            </div>
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
                            <div className={cx("product-detail__rating")}>
                                <span>start</span>
                            </div>
                            <p className={cx("product-detail__description")}>
                                {productDetail.description}
                            </p>
                            <div className={cx("product-detail__cart")}>
                                <div className={cx("product-detail__group-form")}>
                                    <input type="text" value="1"/>
                                    <div className={cx("product-detail__quantity")}>
                                        <span className={cx("add")}>+</span>
                                        <span className={cx("sup")}>-</span>
                                    </div>
                                </div>
                                <Button buttonText secondary>Add To Cart</Button>
                            </div>
                            <div className={cx("product-detail__meta")}>
                                <div>
                                    <span className={cx("label")}>SKU:</span>
                                    <span>PR111-1</span>
                                </div>
                                <div>
                                    <span className={cx("label")}>Category:</span>
                                    <span>
                                        <a href="">Accessories</a>
                                    </span>
                                </div>
                                <div className="d-flex">
                                    <span className={cx("label")}>Tags:</span>
                                    <div className={cx("left__tags")}>
                                        <a href="">Aloma</a>
                                        <a href="">Beans</a>
                                        <a href="">Black</a>
                                    </div>
                                </div>
                                <div  className={cx("d-flex")}>
                                    <span className={cx("label")}>Share:</span>
                                    <div className={cx("footer__social")}>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <i className={`fa-brands fa-instagram ${cx("icon")}`}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className={`fab fa-twitter ${cx("icon")}`}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    <i className={`fa-brands fa-facebook-f ${cx("icon")}`}></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("product-detail__tablist")}>
                                <ul>
                                    <li className={cx("product-detail__tab", "active")}>
                                        <a href="#tab-1">Description</a>
                                    </li>
                                    <li className={cx("product-detail__tab")}>
                                        <a href="#tab-2">Additional information</a>
                                    </li>
                                    <li className={cx("product-detail__tab")}>
                                        <a href="#tab-3">Review(1)</a>
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