import { ProductsListItem } from 'components';
import { Grid } from '@mui/material';

export default function ProductsList({ products, state }) {
  return (
    <Grid container component="ul" spacing={2}>
      {products.map(product => (
        <ProductsListItem key={product.id} product={product} state={state} />
      ))}
    </Grid>
  );
}
