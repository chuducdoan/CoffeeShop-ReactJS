import config from '~/config';
import About from '~/pages/About';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.about, component: About},
    {path: config.routes.contact, component: Contact},
    {path: config.routes.productDetail, component: ProductDetail},
    {path: config.routes.login, component: Login, layout: null}
];

const privateRoutes = [
    {path: config.routes.home, component: Home}
];

export {publicRoutes, privateRoutes};