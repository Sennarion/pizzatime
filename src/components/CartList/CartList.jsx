import { useSelector } from 'react-redux';
import CartListItem from 'components/CartListItem/CartListItem';

export default function CartList() {
  const products = useSelector(state => state.cart.items);
  return (
    <>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <CartListItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </>
  );
}
