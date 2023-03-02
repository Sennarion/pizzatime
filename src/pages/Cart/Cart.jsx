import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import { CartList, OrderModal } from 'components';

export default function Cart() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSuccessOrder, setIsSuccessOrder] = useState(false);

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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4">Total price: {totalPrice}₴</Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => setIsOrderModalOpen(true)}
            >
              Order now
            </Button>
          </Stack>
        </>
      ) : (
        <>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h5">
              Your cart is currently empty :(
            </Typography>
            <Button component={Link} to="/products" variant="outlined">
              Go to products
            </Button>
          </Stack>
        </>
      )}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onOrder={() => setIsSuccessOrder(true)}
      />
      <Snackbar
        open={isSuccessOrder}
        autoHideDuration={5000}
        onClose={() => setIsSuccessOrder(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="info" onClose={() => setIsSuccessOrder(false)}>
          Your order has been accepted. Please wait for a call from our manager.
        </Alert>
      </Snackbar>
    </Container>
  );
}
