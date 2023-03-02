import CartListItem from 'components/CartListItem/CartListItem';
import { Grid } from '@mui/material';

export default function CartList({ cartItems }) {
  return (
    <Grid container component="ul" spacing={2} mb={4}>
      {cartItems.map(product => (
        <CartListItem key={product.id} product={product} />
      ))}
    </Grid>
  );
}
