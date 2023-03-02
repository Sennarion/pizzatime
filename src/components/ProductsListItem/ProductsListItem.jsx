import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from 'redux/cart/slice';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  Divider,
} from '@mui/material';

export default function ProductsListItem({ product }) {
  const dispatch = useDispatch();

  const { name, id, ingredients, price, discountPrice, photoUrl, status } =
    product;
  const pricePerUnit = discountPrice || price;

  return (
    <Grid item component="li" xs={12} sm={6} md={4} position="relative">
      <Card variant="outlined">
        <CardMedia sx={{ height: 220 }} image={photoUrl} title={name} />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" noWrap>
            {ingredients.join(', ')}
          </Typography>
          <Divider sx={{ margin: '10px' }} />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="h4" color="secondary">
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
          <Button component={Link} to={`/products/${id}`}>
            More info
          </Button>
          <Button onClick={() => dispatch(addProduct(product))}>Buy</Button>
        </CardActions>
      </Card>
      {status && (
        <Stack
          justifyContent="center"
          alignItems="center"
          position="absolute"
          bottom={-6}
          right={-6}
          borderRadius={2}
          bgcolor="#aeaeae"
          p={2}
        >
          <Typography variant="body2" textAlign="center">
            {status}
          </Typography>
        </Stack>
      )}
    </Grid>
  );
}
