import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDocs, collection } from 'firebase/firestore';
import { db } from 'firebase-config/config';
import { Container } from '@mui/material';
import { setErrorStatus, setIsLoading } from 'redux/global/slice';
import { ProductsList, Filter } from 'components';
import { sortProductsByValue } from 'utils/sortProducts';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const sortByValue = searchParams.get('sort');

  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    dispatch(setIsLoading(true));
    getDocs(productsCollectionRef)
      .then(products =>
        products.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      )
      .then(setProducts)
      .catch(err => dispatch(setErrorStatus(err.message)))
      .finally(() => dispatch(setIsLoading(false)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newSortedProducts = sortProductsByValue(products, sortByValue);
    setSortedProducts(newSortedProducts);
  }, [products, sortByValue]);

  return (
    <Container>
      <Filter setSearchParams={setSearchParams} />
      <ProductsList products={sortedProducts} state={{ from: location }} />
    </Container>
  );
}
