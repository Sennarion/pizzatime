import { ProductsListItem } from 'components';
import { Grid } from '@mui/material';

export default function ProductsList({ products }) {
  return (
    <Grid container component="ul" spacing={4}>
      {products.map(product => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </Grid>
  );
}
