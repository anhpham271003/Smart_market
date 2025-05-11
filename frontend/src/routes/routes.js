import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home/Home';
import Order from '~/pages/Order';
import Profile from '~/pages/Profile';
import Address from '~/pages/Address';
import Search from '~/pages/Search';
import ProductDetail from '~/pages/ProductDetail';
import AddProduct from '~/pages/AddProduct';
import UpdateProduct from '~/pages/UpdateProduct';
import Category from '~/pages/Category';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Banner from '~/pages/Banner';
import AddBanner from '~/pages/AddBanner';
import ForgotPassword from '~/pages/ForgotPassword';
import UpdateBanner from '~/pages/UpdateBanner';
import Sale from '~/pages/Sale';
import AddSale from '~/pages/AddSale';
import UpdateSale from '~/pages/UpdateSale';
import Checkout from '~/pages/Checkout';
import CartDetail from '~/pages/CartDetail/CartDetail';
import OrderSuccess from '~/pages/OrderSuccess/OrderSuccess';
import PaymentReturn from '~/pages/PaymentReturn/PaymentReturn';
import OrderDetail from '~/pages/OrderDetail';
import Origin from '~/pages/Origin';
import Manufacturer from '~/pages/Manufacturer';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.order, component: Order },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.address, component: Address, layout: HeaderOnly },
    { path: config.routes.search, component: Search },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.addProduct, component: AddProduct },
    { path: config.routes.updateProduct, component: UpdateProduct },
    { path: config.routes.category, component: Category },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.news, component: Banner },
    { path: config.routes.addNew, component: AddBanner },
    { path: config.routes.updateNew, component: UpdateBanner },
    { path: config.routes.sales, component: Sale },
    { path: config.routes.addSale, component: AddSale },
    { path: config.routes.updateSale, component: UpdateSale },
    { path: config.routes.forgotpassword, component: ForgotPassword, layout: null },
    { path: config.routes.checkout, component: Checkout },
    { path: '/cart-detail', component: CartDetail },
    { path: '/order-success/:orderId?', component: OrderSuccess },
    { path: '/payment-return', component: PaymentReturn },
    { path: '/orders/:orderId', component: OrderDetail },
    { path: '/origins', component: Origin },
    { path: '/manufacturers', component: Manufacturer },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
