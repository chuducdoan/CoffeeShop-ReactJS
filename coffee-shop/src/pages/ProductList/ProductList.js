import { async } from "@firebase/util";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import categoryApi from "~/api/categoryApi";
import productApi from "~/api/productApi";
import Banner from "~/components/Banner";
import Button from "~/components/Button";
import ProductItem from "~/components/ProductItem";
import config from "~/config";
import style from './ProductList.module.scss';

const cx = classNames.bind(style);

function ProductList() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const search = useLocation().search;
    const categoryId = new URLSearchParams(search).get('categoryId');

    useEffect(() => {
        if (categoryId === null) {
            const fetchProducts = async () => {
                const params = {
                    _page: 1,
                    _limit: 5
                }
                const response = await productApi.getAll(params);
                setProducts(response.data);
            }
            const fetcgCategories = async () => {
                const response = await categoryApi.getAll();
                setCategories(response);
            }
            fetchProducts();
            fetcgCategories();
        } else {
            const fetchProductsByCategory = async () => {
                const response = await productApi.getProductsByCategory(categoryId);
                console.log('Product by category: ', response)
                setProducts(response);
            }
            fetchProductsByCategory();
        }
    }, [categoryId]);

    return ( 
        <>
            <Banner title="Product List" productList>
                <h1>Product List</h1>
            </Banner>
            <section className={cx("product-list")}>
                <div className="grid row">
                    <div className="col-xl-3">
                        <div className={cx("product-list__left")}>
                            <div className={cx("left__item")}>
                                <h5>FILTER BY PRICE</h5>
                                <form action="" className={cx("left__form")}>
                                    <input type="range"/>
                                    <div className={cx("left__form-group")}>
                                        <div>
                                            Price: <span>$12</span> — <span>$600</span>
                                        </div>
                                        <Button buttonText secondary small>Filter</Button>
                                    </div>
                                </form>
                            </div>
                            <div className={cx("left__item")}>
                                <h5>PRODUCT CATEGORIES</h5>
                                <div className={cx("contact-item")}>
                                    <ul>
                                        {categories.map((category, index) => (
                                            <li key={index}>
                                                <Link to={`${config.routes.productList}?categoryId=${category.id}`}>{category.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/* <div className={cx("left__item")}>
                                <h5>PRODUCT TAGS</h5>
                                <div className={cx("left__tags")}>
                                    <a href="">Aloma</a>
                                    <a href="">Beans</a>
                                    <a href="">Black</a>
                                    <a href="">Casual</a>
                                    <a href="">Classic</a>
                                    <a href="">Fresh</a>
                                </div>
                            </div>
                            <div className={cx("left__item")}>
                                <h5>TOP RATED PRODUCTS</h5>
                                <div className={cx("left__product")}>
                                    <div className={cx("left__product-item")}>
                                        <a href="#" className={cx("image")}>
                                            <img src="assets/images/product1.png" alt=""/>
                                        </a>
                                        <div className={cx("left__product-content")}>
                                            <a href="">
                                                <span>Columbia Coffee</span>
                                            </a>
                                            <div className={cx("rate")}>
                                                *****
                                            </div>
                                            <span className={cx("price")}>$25.00</span>
                                        </div>
                                    </div>
                                    <div className={cx("left__product-item")}>
                                        <a href="" className={cx("image")}>
                                            <img src="assets/images/product2.png" alt=""/>
                                        </a>
                                        <div className={cx("left__product-content")}>
                                            <a href="">
                                                <span>Columbia Coffee</span>
                                            </a>
                                            <div className={cx("rate")}>
                                                *****
                                            </div>
                                            <span className={cx("price")}>$25.00</span>
                                        </div>
                                    </div>
                                    <div className={cx("left__product-item")}>
                                        <a href="" className={cx("image")}>
                                            <img src="assets/images/product3.png" alt=""/>
                                        </a>
                                        <div className={cx("left__product-content")}>
                                            <a href="">
                                                <span>Columbia Coffee</span>
                                            </a>
                                            <div className={cx("rate")}>
                                                *****
                                            </div>
                                            <span className={cx("price")}>$25.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className={cx("left__item")}>
                                <div className={cx("left__search")}>
                                    <input type="text" placeholder="Search"/>
                                    <button>
                                        <span className={`fa fa-search ${cx("icon__search")}`}></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="product-list__right">
                            <div className="row">
                                {products.map((product, index) => (
                                    <div className="col-sm-6 col-md-4" key={index}>
                                        <ProductItem 
                                        to={`${config.routes.productDetail}/${product.id}`}
                                        product={product}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default ProductList;