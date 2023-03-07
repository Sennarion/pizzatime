import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Avatar, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import {
  selectIsLoggedIn,
  selectEmail,
  selectAvatar,
} from 'redux/auth/selectors';
import { auth } from 'firebase-config/config';
import { setIsLoading, setErrorStatus } from 'redux/global/slice';
import { removeUser } from 'redux/auth/slice';
import { cleanCart } from 'redux/cart/slice';

export default function Userbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const userRef = useRef(null);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);
  const avatar = useSelector(selectAvatar);

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
    <Box>
      {isLoggedIn ? (
        <>
          <IconButton
            ref={userRef}
            onClick={() => setIsMenuOpen(prev => !prev)}
            sx={{ p: 0 }}
          >
            <Avatar alt={email} src={avatar} />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            anchorEl={userRef.current}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(prev => !prev)}
          >
            <MenuItem component={Link} to="/profile">
              Profile
            </MenuItem>
            <MenuItem onClick={() => dispatch(singout)}>Sign out</MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          component={Link}
          to="/signin"
          endIcon={<LoginRoundedIcon />}
          sx={{ color: 'common.white' }}
        >
          Sign in
        </Button>
      )}
    </Box>
  );
}
