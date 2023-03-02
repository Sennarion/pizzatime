import { useSelector } from 'react-redux';
import { ProductsListItem } from 'components';

export default function ProductsList() {
  const products = useSelector(state => state.products.items);

  return (
    <ul>
      {products.map(product => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
