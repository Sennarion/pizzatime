import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from 'redux/cart/slice';

export default function CartListItem({ product }) {
  const dispatch = useDispatch();

  const { id, name, price, discountPrice, quantity } = product;

  const pricePerUnit = discountPrice || price;
  const totalPrice = pricePerUnit * quantity;

  return (
    <li key={id} style={{ border: '1px solid black' }}>
      <p>Name: {name}</p>
      <p>Price per unit: {pricePerUnit}</p>
      <p>Total price: {totalPrice}</p>
      <p>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>{' '}
        Quantity:
        {quantity}
        <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
      </p>
    </li>
  );
}
