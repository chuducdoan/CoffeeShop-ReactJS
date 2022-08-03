import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCart } from "~/action";
import categoryApi from "~/api/categoryApi";
import productApi from "~/api/productApi";
import Banner from "~/components/Banner";
import Button from "~/components/Button";
import Pagination from "~/components/Pagination";
import ProductItem from "~/components/ProductItem";
import config from "~/config";
import style from './ProductList.module.scss';

const cx = classNames.bind(style);

function ProductList() {

    const user = useSelector(state => state.authRed.user);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    })
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 10
    })

    const textResult = useRef(searchText);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriesRef = useRef(categories);
    const search = useLocation().search;
    const categoryId = new URLSearchParams(search).get('categoryId');

    useEffect(() => {
        if (categoryId === null) {
            const fetchProducts = async () => {
                const params = filter;
                const response = await productApi.getAll(params);
                setProducts(response.data);
                setPagination(response.pagination);
            }
            fetchProducts();
        } else {
            const fetchProductsByCategory = async () => {
                const params = filter;
                const response = await productApi.getProductsByCategory(categoryId, params);
                setProducts(response.data);
                setPagination(response.pagination);
            }
            fetchProductsByCategory();
        }
        const fetcgCategories = async () => {
            const response = await categoryApi.getAll();
            categoriesRef.current = response;
            setCategories(response);
        }
        fetcgCategories();
        if (searchText && searchText.length > 0) {
            const fecthProductSearch = async () => {
                const params = filter;
                const response = await productApi.getAll(params);
                setProducts(response.data);
                setPagination(response.pagination);
            }
            fecthProductSearch();
            textResult.current = `Result search by: ${searchText}`;
            setSearchText('');
        }
    }, [categoryId, filter]);

    console.log(textResult)

    const handleSearch = () => {
        setFilter(state => {
            if (categoryId) {
                return {...state, name_like: searchText, categoryId: categoryId}
            } else {
                return {...state, name_like: searchText}
            }
        })
    }

    const handleAddToCart = (product) => {
        if (!user || user === null) {
            navigate(config.routes.login);
            return;
        }
        dispatch(addCart(product));
    }

    const handlePageChange = (newPage) => {
        setFilter(state => ({...state, _page: newPage}));
    }

    const handleClickPage = () => {
        setFilter({
            _page: 1,
            _limit: 10
        });
        textResult.current = '';
    }

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
                                    <input type="range" />
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
                                        {categoriesRef.current.map((category, index) => (
                                            <li key={index}>
                                                <Link to={`${config.routes.productList}?categoryId=${category.id}`} onClick={handleClickPage}>{category.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={cx("left__item")}>
                                <div className={cx("left__search")}>
                                    <input type="text" value={searchText} placeholder="Search" onChange={(e) => setSearchText(e.target.value)}/>
                                    <button onClick={handleSearch}>
                                        <span className={`fa fa-search ${cx("icon__search")}`}></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className="product-list__right">
                            <div className="row">
                                <ToastContainer/>
                                {textResult.current && (
                                     <div className="col-12">
                                        <p className={cx('message-search')}>{textResult.current}</p>
                                     </div>
                                )}
                                {products.map((product, index) => (
                                    <div className="col-sm-6 col-md-4" key={index}>
                                        <ProductItem 
                                        to={`${config.routes.productDetail}/${product.id}`}
                                        product={product}
                                        handleOnClick={() => handleAddToCart(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <Pagination pagination={pagination} onPageChange={handlePageChange}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default ProductList;