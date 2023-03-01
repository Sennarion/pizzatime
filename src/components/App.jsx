import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout, Home } from 'components';

const Signup = lazy(() => import('pages/Signup/Signup'));
const Signin = lazy(() => import('pages/Signin/Signin'));
const Cart = lazy(() => import('pages/Cart/Cart'));
const Profile = lazy(() => import('pages/Profile/Profile'));
const Products = lazy(() => import('pages/Products/Products'));
const ProductDetails = lazy(() =>
  import('pages/ProductDetails/ProductDetails')
);

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
