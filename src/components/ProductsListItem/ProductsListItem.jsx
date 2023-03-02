import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from 'redux/cart/slice';

export default function ProductsListItem({ product }) {
  const dispatch = useDispatch();

  const { name, id, price, discountPrice, photoUrl, status } = product;

  return (
    <li>
      <img src={photoUrl} alt={name} loading="lazy" />
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>DiscountPrice: {discountPrice}</p>
      <p>Status: {status}</p>
      <Link to={`/products/${id}`}>More info</Link>
      <button onClick={() => dispatch(addProduct(product))}>Buy</button>
    </li>
  );
}
