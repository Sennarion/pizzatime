import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Button } from '@mui/material';
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
    <Container>
      {cartItems.length > 0 ? (
        <>
          <CartList cartItems={cartItems} />
          <Typography variant="h4">Total price: {totalPrice}₴</Typography>
          <Button>Order now</Button>
        </>
      ) : (
        <p>Empty</p>
      )}
    </Container>
  );
}
