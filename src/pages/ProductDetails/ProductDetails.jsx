import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase-config/config';
import { addProduct, deleteProduct } from 'redux/cart/slice';
import {
  Box,
  Container,
  Stack,
  Button,
  Typography,
  Rating,
} from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { setErrorStatus } from 'redux/global/slice';
import { selectCartItems } from 'redux/cart/selectors';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const { productId } = useParams();

  const docRef = doc(db, 'products', productId);

  useEffect(() => {
    getDoc(docRef)
      .then(product => setProduct(product.data()))
      .catch(err => dispatch(setErrorStatus(err.message)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return null;

  const {
    id,
    name,
    weight,
    diameter,
    price,
    discountPrice,
    ingredients,
    description,
    photoUrl,
    rating,
  } = product;

  const isInCart = cartItems.some(product => product.id === id);
  const pricePerUnit = discountPrice || price;

  return (
    <Container>
      <Stack spacing={4} direction={{ xs: 'column', md: 'row' }}>
        <Box borderRadius={10} overflow="hidden" boxShadow={2}>
          <img src={photoUrl} alt={name} width="400" />
        </Box>
        <Stack>
          <Typography variant="h4" mb={2} color="primary">
            {name}
          </Typography>
          <Typography mb={2}>{description}</Typography>
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
          <Typography mb={2} mt={2}>
            <Typography variant="h6" component="span" mr={1}>
              Ingredients:
            </Typography>
            {ingredients.join(', ')}
          </Typography>
          <Typography mb={2}>
            <Typography variant="h6" component="span" mr={1}>
              Weight:
            </Typography>
            {weight}
          </Typography>
          <Typography mb={2}>
            <Typography variant="h6" component="span" mr={1}>
              Diameter:
            </Typography>
            {diameter}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h4" color="primary" mb={2}>
              {pricePerUnit}₴
            </Typography>
            {discountPrice && (
              <Typography
                variant="h6"
                sx={{ textDecoration: 'line-through' }}
                mb={2}
              >
                {price}₴
              </Typography>
            )}
          </Stack>
          {isInCart ? (
            <Button
              variant="outlined"
              color="primary"
              startIcon={<RemoveShoppingCartRoundedIcon />}
              onClick={() => dispatch(deleteProduct(id))}
            >
              Delete from cart
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddShoppingCartRoundedIcon />}
              onClick={() => dispatch(addProduct(product))}
            >
              Add to cart
            </Button>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
