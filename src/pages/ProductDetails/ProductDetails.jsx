import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebase.js';
import { addProduct } from 'redux/cart/slice';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  const { productId } = useParams();

  const docRef = doc(db, 'products', productId);

  useEffect(() => {
    getDoc(docRef)
      .then(product => setProduct(product.data()))
      .catch(err => alert(err));
  }, [docRef]);

  if (!product) return null;

  const {
    name,
    id,
    weight,
    diameter,
    price,
    discountPrice,
    ingredients,
    description,
    photoUrl,
    status,
  } = product;

  return (
    <div>
      <img src={photoUrl} alt={name} />
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <p>DiscountPrice: {discountPrice}</p>
      <p>Weight: {weight}</p>
      <p>Diameter: {diameter}</p>
      <p>Ingredients: {ingredients.join(', ')}</p>
      <p>Status: {status}</p>
      <button onClick={() => dispatch(addProduct(product))}>Buy</button>
    </div>
  );
}
