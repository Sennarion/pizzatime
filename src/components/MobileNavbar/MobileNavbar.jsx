import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Drawer,
  Stack,
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase-config/config';
import { removeUser } from 'redux/auth/slice';
import { cleanCart } from 'redux/cart/slice';
import { NavItem } from './MobileNavbar.styled';

export default function MobileNavbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartItems = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const singout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(cleanCart());
      })
      .catch(alert);
  };

  return (
    <Box display={{ xs: 'block', md: 'none' }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton component={NavItem} to="/cart" color="primary">
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartRoundedIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={() => setIsDrawerOpen(true)} color="primary">
          <MenuRoundedIcon />
        </IconButton>
      </Stack>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width="200px">
          <List>
            <ListItem disablePadding>
              <ListItemButton component={NavItem} to="/">
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={NavItem} to="/products">
                <ListItemIcon>
                  <LocalPizzaRoundedIcon />
                </ListItemIcon>
                <ListItemText>Products</ListItemText>
              </ListItemButton>
            </ListItem>
            {isLoggedIn && (
              <ListItem disablePadding>
                <ListItemButton component={NavItem} to="/profile">
                  <ListItemIcon>
                    <PersonRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Profile</ListItemText>
                </ListItemButton>
              </ListItem>
            )}
            {isLoggedIn ? (
              <ListItem disablePadding>
                <ListItemButton onClick={singout}>
                  <ListItemIcon>
                    <LogoutRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Sign out</ListItemText>
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component={NavItem} to="/signin">
                  <ListItemIcon>
                    <LoginRoundedIcon />
                  </ListItemIcon>
                  <ListItemText>Sign in</ListItemText>
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
