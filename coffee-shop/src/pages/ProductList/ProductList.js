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
import Input from "~/components/Input";
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
    const [fromPrice, setFromPrice] = useState('');
    const [toPrice, setToPrice] = useState('');
    const [error, setError] = useState(false);
    const [errorSearch, setErrorSearch] = useState(false);

    const textResult = useRef(searchText);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const categoriesRef = useRef(categories);
    const search = useLocation().search;
    const categoryId = new URLSearchParams(search).get('categoryId');

    useEffect(() => {
        let params = filter;
        if (categoryId !== null) {
            params = {...params, categoryId: categoryId}
        }
        const fetchProducts = async () => {
            const response = await productApi.getAll(params);
            setProducts(response.data);
            setPagination(response.pagination);
        }
        fetchProducts();

        const fetcgCategories = async () => {
            const response = await categoryApi.getAll();
            categoriesRef.current = response;
            setCategories(response);
        }
        fetcgCategories();
    }, [categoryId, filter]);

    const handleSearch = () => {
        if (searchText === '') {
            setErrorSearch(true);
        } else {
            textResult.current = `Result search by: ${searchText}`;
            setFilter(state => ({...state, name_like: searchText}));
            setErrorSearch(false);
            setSearchText('');
        }
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

    const handleChangeFromPrice = (e) => {
        const fromPriceProduct = Number.parseInt(e.target.value);
        if (isNaN(fromPriceProduct)) {
            if (e.target.value.length === 0 || e.target.value === '') {
                setFromPrice(e.target.value);
            }
            return;
        }
        console.log(fromPrice)
        setFromPrice(fromPriceProduct);
    }

    const handleChangeToPrice = (e) => {
        const fromToProduct = Number.parseInt(e.target.value);
        if (isNaN(fromToProduct)) {
            if (e.target.value.length === 0 || e.target.value === '') {
                setToPrice(e.target.value);
            }
            return;
        }
        setToPrice(fromToProduct);
    }

    const handleOnFilter = () => {
        if (fromPrice === '' || toPrice === '') {
            setError(true);
        } else {
            setFilter(state => ({...state, price_gte: fromPrice, price_lte: toPrice}));
            setError(false);
        }
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
                                <div className={cx("left__form")}>
                                    <div>
                                        <div className={cx('filter-price')}>
                                            <Input placeholder="$ from" value={fromPrice} onChange={(e) => handleChangeFromPrice(e)}/>
                                            <span className={cx('filter__line')}></span>
                                            <Input placeholder="$ to" value={toPrice} onChange={(e) => handleChangeToPrice(e)}/>
                                        </div>
                                        <div>
                                            {error && (<p className="message__error">Please enter the appropriate price range</p>)}
                                        </div>
                                    </div>
                                    <div className={cx("left__form-group")}>
                                        <div>
                                            Price: <span>${fromPrice}</span> — <span>${toPrice}</span>
                                        </div>
                                        <Button buttonText secondary small handleOnClick={handleOnFilter}>Filter</Button>
                                    </div>
                                </div>
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
                                {errorSearch && (
                                     <div>
                                        <p className="message__error">Please enter keyword search</p>
                                    </div>
                                )}
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