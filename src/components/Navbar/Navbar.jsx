import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Stack, IconButton, Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase.js';
import { removeUser } from 'redux/auth/slice';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const singout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
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
          <IconButton component={NavLink} to="/cart">
            <ShoppingCartRoundedIcon />
          </IconButton>
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
