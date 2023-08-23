import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Dashboard from '../views/Admin/Dashboard';
import ErrorView from '../pages/error/ErrorView';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Dashboard />}>
      <Route path='/admin/products' element={<Dashboard />} />

      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);
