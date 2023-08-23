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
import Products from '../pages/Products/Products';
import CartView from '../pages/cart/CartView';
import SettingView from '../pages/setting/SettingView';
import ProductDetails from '../components/common/ProductDetails';
import Cursole from '../components/common/Cursole';
import Dashboard from '../views/Admin/Dashboard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<HomeView />} />
      <Route path='/login' element={<LoginView />} />
      <Route path='/register' element={<RegisterView />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cursole' element={<Cursole />} />
      <Route path='/products/:id' element={<ProductDetails />} />
      <Route path='/cart' element={<CartView />} />
      <Route path='/setting/user' element={<SettingView />} />
      <Route path='/admin/dashboard' element={<Dashboard />} />

      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);
