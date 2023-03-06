import { useDispatch, useSelector } from 'react-redux';
import { Stack, Button, IconButton, Badge } from '@mui/material';
import { signOut } from 'firebase/auth';
import { setErrorStatus, setIsLoading } from 'redux/global/slice';
import { auth } from 'firebase-config/config';
import { removeUser } from 'redux/auth/slice';
import { cleanCart } from 'redux/cart/slice';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectCartItems } from 'redux/cart/selectors';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { NavItem } from './Navbar.styled';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const cartItems = useSelector(selectCartItems);

  const singout = () => {
    dispatch(setIsLoading(true));
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(cleanCart());
      })
      .catch(err => dispatch(setErrorStatus(err.message)))
      .finally(() => dispatch(setIsLoading(false)));
  };

  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      spacing={20}
      display={{ xs: 'none', md: 'flex' }}
    >
      <Stack direction="row" alignItems="center" spacing={4}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/products">Products</NavItem>
        {isLoggedIn && <NavItem to="/profile">Profile</NavItem>}
      </Stack>
      {isLoggedIn ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton component={NavItem} to="/cart" color="primary">
            <Badge badgeContent={cartItems.length} color="primary">
              <ShoppingCartRoundedIcon />
            </Badge>
          </IconButton>
          <Button
            onClick={singout}
            color="primary"
            startIcon={<LogoutRoundedIcon />}
          >
            Sign out
          </Button>
        </Stack>
      ) : (
        <Button
          component={NavItem}
          to="/signin"
          startIcon={<LoginRoundedIcon />}
          color="primary"
        >
          Sign in
        </Button>
      )}
    </Stack>
  );
}
