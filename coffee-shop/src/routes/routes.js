import config from '~/config';
import LoginLayout from '~/layout/LoginLayout/LoginLayout';
import About from '~/pages/About';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import ProductList from '~/pages/ProductList';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.productList, component: ProductList },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.login, component: Login, layout: LoginLayout }
];

// Những router cần đăng nhập mới vào được
const privateRoutes = [
    { path: config.routes.home, component: Home }
];

export { publicRoutes, privateRoutes };