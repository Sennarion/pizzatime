import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartList } from 'components';

export default function Cart() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartItems = useSelector(state => state.cart.items);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const totalPrice = cartItems.reduce((total, item) => {
    const pricePerUnit = item.discountPrice || item.price;
    return total + item.quantity * pricePerUnit;
  }, 0);

  return (
    <>
      <CartList />
      <h2>Total price: {totalPrice}</h2>
      <button>Order now</button>
    </>
  );
}
