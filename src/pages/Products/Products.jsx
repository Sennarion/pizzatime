import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from 'firebase-config/config';
import { ProductsList, Filter } from 'components';
import { Container } from '@mui/material';
import { filterParams } from 'data/filter-params';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByValue = searchParams.get('sort');

  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    getDocs(productsCollectionRef)
      .then(products =>
        products.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      )
      .then(setProducts)
      .catch(alert);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    switch (sortByValue) {
      case filterParams.byPriceDown:
        setSortedProducts([
          ...products.sort((a, b) => {
            const priceA = a.discountPrice || a.price;
            const priceB = b.discountPrice || b.price;
            return priceB - priceA;
          }),
        ]);
        break;
      case filterParams.byPriceUp:
        setSortedProducts([
          ...products.sort((a, b) => {
            const priceA = a.discountPrice || a.price;
            const priceB = b.discountPrice || b.price;
            return priceA - priceB;
          }),
        ]);
        break;
      case filterParams.byRatingDown:
        setSortedProducts([...products.sort((a, b) => b.rating - a.rating)]);
        break;
      case filterParams.byRatingUp:
        setSortedProducts([...products.sort((a, b) => a.rating - b.rating)]);
        break;
      default:
        setSortedProducts([...products]);
    }
  }, [products, sortByValue]);

  return (
    <Container>
      <Filter setSearchParams={setSearchParams} />
      <ProductsList products={sortedProducts} />
    </Container>
  );
}
