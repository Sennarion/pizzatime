import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase-config/config';
import { addProduct, deleteProduct } from 'redux/cart/slice';
import { setErrorStatus, setIsLoading } from 'redux/global/slice';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectCartItems } from 'redux/cart/selectors';
import {
  Box,
  Container,
  Stack,
  Button,
  Typography,
  Rating,
} from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import RemoveShoppingCartRoundedIcon from '@mui/icons-material/RemoveShoppingCartRounded';
import { SigninModal } from 'components';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  const { productId } = useParams();
  const docRef = doc(db, 'products', productId);

  useEffect(() => {
    dispatch(setIsLoading(true));
    getDoc(docRef)
      .then(product => setProduct({ id: productId, ...product.data() }))
      .catch(err => dispatch(setErrorStatus(err.message)))
      .finally(() => dispatch(setIsLoading(false)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      return;
    }

    dispatch(addProduct(product));
  };

  if (!product) return null;

  const {
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

  const isInCart = cartItems.some(product => product.id === productId);
  const pricePerUnit = discountPrice || price;

  return (
    <Container>
      <Stack
        spacing={4}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="flex-start"
      >
        <Box borderRadius={10} overflow="hidden" boxShadow={2} maxWidth="600px">
          <img src={photoUrl} alt={name} width="600" />
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
            {weight} g
          </Typography>
          <Typography mb={2}>
            <Typography variant="h6" component="span" mr={1}>
              Diameter:
            </Typography>
            {diameter} cm
          </Typography>
          <Stack direction="row" spacing={2}>
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
          <Stack spacing={2}>
            {isInCart ? (
              <Button
                variant="outlined"
                color="primary"
                startIcon={<RemoveShoppingCartRoundedIcon />}
                onClick={() => dispatch(deleteProduct(productId))}
              >
                Delete from cart
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartRoundedIcon />}
                onClick={addToCart}
              >
                Add to cart
              </Button>
            )}
            <Button
              component={Link}
              to={backLinkHref}
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIosNewRoundedIcon />}
            >
              Go back
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <SigninModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  );
}
