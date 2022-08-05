import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addCart } from "~/action";
import {ToastContainer} from 'react-toastify'

import blogApi from "~/api/blogApi";
import productApi from "~/api/productApi";
import Banner from "~/components/Banner";
import BlogItem from "~/components/BlogItem";
import BoxItem from "~/components/BoxItem";
import Galley from "~/components/Galley";
import ProductItem from "~/components/ProductItem";
import TextWrapper from "~/components/TextWrapper";
import config from "~/config";
import style from './Home.module.scss';

const cx = classNames.bind(style);

const galleys = [
    {
        title: 'Perfect Cup',
        image: 'assets/images/perfect-cup.jpg'
    },
    {
        title: 'Coffee drips',
        image: 'assets/images/coffee-drep.jpg'
    },
    {
        title: 'Brewed',
        image: 'assets/images/brew.jpg'
    },
    {
        title: 'Banked bean',
        image: 'assets/images/baked-bean.jpg'
    },
    {
        title: 'Perfect Cup',
        image: 'assets/images/perfect-cup.jpg'
    },
    {
        title: 'Coffee drips',
        image: 'assets/images/coffee-drep.jpg'
    },
    {
        title: 'Brewed',
        image: 'assets/images/brew.jpg'
    },
    {
        title: 'Banked bean',
        image: 'assets/images/baked-bean.jpg'
    },
]

function Home() {
    const user = useSelector(state => state.authRed.user);
    const [blogs, setBlogs] = useState([]);
    const [productNews, setProductNews] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const fetchBlogList = async () => {
                const params = {
                    _sort: 'createAt',
                    _order: 'desc',
                    _limit: 3
                }
                const response = await blogApi.getAll(params);
                setBlogs(response.data);
            }
            const fetchProductNews = async () => {
                const params = {
                    _sort: 'createAt',
                    _order: 'desc',
                    _limit: 4
                }
                const response = await productApi.getAll(params);
                setProductNews(response.data);
            }
            fetchBlogList();
            fetchProductNews();
        } catch(error) {
            console.log(error)
        }
    }, []);

    const handleAddToCart = (product) => {
        if (!user || user === null) {
            navigate(config.routes.login);
            return;
        }
        dispatch(addCart(product));
     }

    return ( 
        <div>
            <Banner title="View Product" home>
                <img src="assets/images/home-2-logo-1.png" alt=""/>
            </Banner>
            <section className={cx("content")}>
                <TextWrapper 
                tittle="Our Delicious Offer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                />
                <div className={cx("offer")}>
                    <div className="grid">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <BoxItem
                                image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-5.png"
                                title="Types of Coffee"
                                description="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
                                to="#"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <BoxItem
                                image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-6.png"
                                title="Types of Coffee"
                                description="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
                                to="#"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <BoxItem
                                image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-7.png"
                                title="Types of Coffee"
                                description="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
                                to="#"
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <BoxItem
                                image="https://corretto.qodeinteractive.com/wp-content/uploads/2018/04/h2-custom-icon-8.png"
                                title="Types of Coffee"
                                description="Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo"
                                to="#"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("blog")}>
                    <TextWrapper 
                    tittle="Our Delicious Offer"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <div className="grid">
                        <div className="row">
                            {blogs.map((blog, index) => (
                                <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                                    <BlogItem
                                    to={`${config.routes.blogDetail}/${blog.id}`}
                                    blog={blog}
                                    />
                                </div>  
                            ))} 
                        </div>
                    </div>
                </div>
                <div className={cx("product-feature")}>
                    <TextWrapper 
                    tittle="Online Coffee Shop"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <div className="grid">
                        <ToastContainer/>
                        <div className="row">
                            {productNews.map((product, index) => (
                                <div className="col-sm-6 col-md-3 col-lg-3" key={index}>
                                    <ProductItem
                                    to={`${config.routes.productDetail}/${product.id}`}
                                    product={product}
                                    handleOnClick={() => handleAddToCart(product)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx("blog", "blog--secondary")}>
                    <TextWrapper 
                        tittle="Our Sweet Gallery"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    />
                    <Galley galleys={galleys} />
                </div>
            </section>
        </div>
     );
}

export default Home;