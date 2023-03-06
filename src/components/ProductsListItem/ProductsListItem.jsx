import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, deleteProduct } from 'redux/cart/slice';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  Rating,
} from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { selectCartItems } from 'redux/cart/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { SigninModal } from 'components';

export default function ProductsListItem({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { name, id, ingredients, price, discountPrice, photoUrl, rating } =
    product;
  const pricePerUnit = discountPrice || price;

  const isInCart = cartItems.some(product => product.id === id);

  const addToCart = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      return;
    }

    dispatch(addProduct(product));
  };

  return (
    <Grid item component="li" xs={12} sm={6} md={4}>
      <Card variant="outlined">
        <CardMedia sx={{ height: 220 }} image={photoUrl} title={name} />
        <CardContent>
          <Typography
            component={Link}
            to={`/products/${id}`}
            variant="h6"
            color="primary"
          >
            {name}
          </Typography>
          <Typography variant="body2" noWrap mb={2}>
            {ingredients.join(', ')}
          </Typography>
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h4" color="primary">
              {pricePerUnit}₴
            </Typography>
            {discountPrice && (
              <Typography variant="h6" sx={{ textDecoration: 'line-through' }}>
                {price}₴
              </Typography>
            )}
          </Stack>
        </CardContent>
        <CardActions>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to={`/products/${id}`}
            >
              More info
            </Button>
            {isInCart ? (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(deleteProduct(id))}
              >
                <RemoveShoppingCartRoundedIcon />
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={addToCart}>
                <AddShoppingCartRoundedIcon />
              </Button>
            )}
          </Stack>
        </CardActions>
      </Card>
      <SigninModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Grid>
  );
}
