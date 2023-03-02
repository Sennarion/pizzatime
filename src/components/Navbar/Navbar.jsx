import { useDispatch, useSelector } from 'react-redux';
import { Stack, Button, Badge } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase-config/config';
import { removeUser } from 'redux/auth/slice';
import { cleanCart } from 'redux/cart/slice';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { NavItem } from './Navbar.styled';

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
      .catch(alert);
  };

  return (
    <Stack as="nav" direction="row" alignItems="center" spacing={20}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/products">Products</NavItem>
        {isLoggedIn && <NavItem to="/profile">Profile</NavItem>}
      </Stack>
      {isLoggedIn ? (
        <Stack direction="row" alignItems="center" spacing={4}>
          <Badge
            component={NavItem}
            to="/cart"
            badgeContent={cartItems.length}
            color="primary"
          >
            <ShoppingCartRoundedIcon />
          </Badge>
          <Button variant="outlined" onClick={singout} color="secondary">
            Sign out
          </Button>
        </Stack>
      ) : (
        <Button
          component={NavItem}
          to="/signin"
          variant="outlined"
          color="secondary"
        >
          Sign In
        </Button>
      )}
    </Stack>
  );
}
