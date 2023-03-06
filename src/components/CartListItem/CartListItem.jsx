import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  deleteProduct,
} from 'redux/cart/slice';
import { Link } from 'react-router-dom';
import {
  Grid,
  Stack,
  IconButton,
  Typography,
  Paper,
  Avatar,
} from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function CartListItem({ product }) {
  const dispatch = useDispatch();

  const { id, name, price, discountPrice, quantity, photoUrl } = product;

  const pricePerUnit = discountPrice || price;
  const totalPrice = pricePerUnit * quantity;

  return (
    <Grid item component="li" xs={12}>
      <Paper>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          borderRadius={2}
          p={4}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            spacing={2}
          >
            <Avatar
              alt={name}
              src={photoUrl}
              sx={{ width: 150, height: 150 }}
            />
            <Stack>
              <Typography
                component={Link}
                to={`/products/${id}`}
                variant="h5"
                color="primary"
              >
                {name}
              </Typography>
              <Typography>Price: {pricePerUnit}₴</Typography>
            </Stack>
          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            spacing={2}
          >
            <Stack direction="row" alignItems="center">
              <IconButton
                onClick={() => dispatch(decrementQuantity(id))}
                color="primary"
              >
                <RemoveCircleRoundedIcon fontSize="large" />
              </IconButton>
              <Typography variant="h5">{quantity}</Typography>
              <IconButton
                onClick={() => dispatch(incrementQuantity(id))}
                color="primary"
              >
                <AddCircleRoundedIcon fontSize="large" />
              </IconButton>
            </Stack>
            <Typography variant="h5" color="primary">
              {totalPrice}₴
            </Typography>
            <IconButton
              onClick={() => dispatch(deleteProduct(id))}
              color="primary"
            >
              <DeleteRoundedIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
}
