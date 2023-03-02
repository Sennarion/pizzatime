import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { getDocs, collection } from 'firebase/firestore';
import { db } from 'firebase-config/config';
// import { setProducts } from 'redux/products/slice';
import { ProductsList, Filter } from 'components';
import { Container } from '@mui/material';

export default function Products() {
  // const dispatch = useDispatch();
  const productsCollectionRef = collection(db, 'products');

  const [products, setProducts] = useState([]);

  // const sortProducts = () => {
  //   return [...products.sort((a, b) => a.price - b.price)];
  // };

  // const sortedProducts = sortProducts();

  // useEffect(() => {
  //   getDocs(productsCollectionRef)
  //     .then(products =>
  //       products.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  //     )
  //     .then(products => {
  //       dispatch(setProducts(products));
  //     })
  //     .catch(err => alert(err));
  // }, [dispatch, productsCollectionRef]);

  // useEffect(() => {
  //   getDocs(productsCollectionRef)
  //     .then(products =>
  //       products.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  //     )
  //     .then(setProducts)
  //     .catch(alert);
  // }, [productsCollectionRef]);

  return (
    <Container>
      <Filter />
      <ProductsList products={products} />
    </Container>
  );
}
