import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDocs, collection } from 'firebase/firestore';
import { db } from 'firebase.js';
import { setProducts } from 'redux/products/slice';
import { ProductsList } from 'components';

export default function Products() {
  const dispatch = useDispatch();
  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    getDocs(productsCollectionRef)
      .then(products =>
        products.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      )
      .then(products => {
        dispatch(setProducts(products));
      })
      .catch(err => alert(err));
  }, [dispatch, productsCollectionRef]);

  return (
    <div>
      <ProductsList />
    </div>
  );
}
