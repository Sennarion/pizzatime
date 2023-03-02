import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Stack, Button, Badge } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase.js';
import { removeUser } from 'redux/auth/slice';
import { cleanCart } from 'redux/cart/slice';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartItems = useSelector(state => state.cart.items);

  const singout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(cleanCart());
      })
      .catch(err => alert(err));
  };

  return (
    <Stack as="nav" direction="row" alignItems="center" spacing={4}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/profile">Profile</NavLink>
          <Badge
            component={NavLink}
            to="/cart"
            badgeContent={cartItems.length}
            color="primary"
          >
            <ShoppingCartRoundedIcon />
          </Badge>
        </>
      )}

      {isLoggedIn ? (
        <Button variant="outlined" onClick={singout}>
          Sign out
        </Button>
      ) : (
        <Button component={NavLink} to="/signin" variant="outlined">
          Sign In
        </Button>
      )}
    </Stack>
  );
}
