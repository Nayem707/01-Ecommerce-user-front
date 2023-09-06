import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '../App';
import HomeView from '../pages/home/HomeView';
import LoginView from '../pages/login/LoginView';
import RegisterView from '../pages/register/RegisterView';
import ErrorView from '../pages/error/ErrorView';
import ProductsView from '../Pages/products/Products';
import CartView from '../Pages/cart/CartView';
import SettingView from '../pages/setting/SettingView';
import ProductDetails from '../Pages/products/ProductDetails';
import PaymentView from '../Pages/payment/paymentView';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<HomeView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/register' element={<RegisterView />} />
      <Route path='/products' element={<ProductsView />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<CartView />} />
      <Route path='/payment' element={<PaymentView />} />
      <Route path='/setting/user' element={<SettingView />} />
      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);
