import config from '~/config';
import LoginLayout from '~/layout/LoginLayout/LoginLayout';
import About from '~/pages/About';
import BlogDetail from '~/pages/BlogDetail';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import ProductList from '~/pages/ProductList';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.productDetail + '/:productId', component: ProductDetail },
    { path: config.routes.productList, component: ProductList },
    { path: config.routes.blogDetail + '/:blogId', component: BlogDetail },
    { path: config.routes.login, component: Login, layout: LoginLayout },
    { path: config.routes.signUp, component: SignUp, layout: LoginLayout },
];

// Những router cần đăng nhập mới vào được
const privateRoutes = [
    { path: config.routes.cart, component: Cart },
    { path: config.routes.checkout, component: Checkout }
];

export { publicRoutes, privateRoutes };
