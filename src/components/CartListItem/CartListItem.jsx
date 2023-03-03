import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
} from 'redux/cart/slice';
import { Link } from 'react-router-dom';
import { Grid, Stack, IconButton, Typography } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function CartListItem({ product }) {
  const dispatch = useDispatch();

  const { id, name, price, discountPrice, quantity } = product;

  const pricePerUnit = discountPrice || price;
  const totalPrice = pricePerUnit * quantity;

  return (
    <Grid item component="li" xs={12}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={2}
        p={4}
        bgcolor="secondary"
      >
        <Typography
          component={Link}
          to={`/products/${id}`}
          variant="h5"
          minWidth="300px"
        >
          {name}
        </Typography>
        <Typography>Price per unit: {pricePerUnit}₴</Typography>
        <Stack direction="row" alignItems="center">
          Quantity:
          <IconButton onClick={() => dispatch(decrementQuantity(id))}>
            <RemoveCircleRoundedIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={() => dispatch(incrementQuantity(id))}>
            <AddCircleRoundedIcon />
          </IconButton>
        </Stack>
        <Typography>Total price: {totalPrice}₴</Typography>
        <IconButton onClick={() => dispatch(deleteProduct(id))}>
          <DeleteRoundedIcon />
        </IconButton>
      </Stack>
    </Grid>
  );
}
