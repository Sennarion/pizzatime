import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout, Loader } from 'components';

const Signup = lazy(() => import('pages/Signup/Signup'));
const Signin = lazy(() => import('pages/Signin/Signin'));
const Home = lazy(() => import('pages/Home/Home'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Profile = lazy(() => import('pages/Profile/Profile'));
const Products = lazy(() => import('pages/Products/Products'));
const ProductDetails = lazy(() =>
  import('pages/ProductDetails/ProductDetails')
);

export default function App() {
  return (
    <Suspense fallback={<Loader isOpen={true} />}>
      <Routes>
        <Route
          path="/signup"
          element={<RestrictedRoute redirectTo="/" component={<Signup />} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute redirectTo="/" component={<Signin />} />}
        />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="cart"
            element={<PrivateRoute redirectTo="/" component={<Cart />} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute redirectTo="/" component={<Profile />} />}
          />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
