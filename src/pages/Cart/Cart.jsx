import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  Button,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import { CartList, OrderModal } from 'components';
import { cleanCart } from 'redux/cart/slice';
import { selectCartItems } from 'redux/cart/selectors';

export default function Cart() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSuccessOrder, setIsSuccessOrder] = useState(false);

  const dispatch = useDispatch();

  const onOrder = () => {
    setIsSuccessOrder(true);
    dispatch(cleanCart());
  };

  const cartItems = useSelector(selectCartItems);

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
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Typography variant="h4">Total price: {totalPrice}₴</Typography>
            <Button
              variant="contained"
              color="primary"
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
        onOrder={onOrder}
      />
      <Snackbar
        open={isSuccessOrder}
        autoHideDuration={6000}
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
