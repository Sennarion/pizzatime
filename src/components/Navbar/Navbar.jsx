import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Stack,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import { selectCartItems } from 'redux/cart/selectors';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Logo } from 'components';
import { NavItem } from './Navbar.styled';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Logo primary={false} />
      </Box>
      <Box display={{ xs: 'flex', md: 'none' }}>
        <IconButton onClick={() => setIsDrawerOpen(true)} color="inherit">
          <Badge badgeContent={cartItems.length} color="secondary">
            <MenuRoundedIcon />
          </Badge>
        </IconButton>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box width="250px">
            <List component="nav">
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
                  <ListItemButton component={NavItem} to="/cart">
                    <ListItemIcon>
                      <Badge badgeContent={cartItems.length} color="primary">
                        <ShoppingCartRoundedIcon />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText>Cart</ListItemText>
                  </ListItemButton>
                </ListItem>
              )}
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box display={{ xs: 'block', md: 'none' }}>
        <Logo primary={false} />
      </Box>
      <Stack
        component="nav"
        display={{ xs: 'none', md: 'flex' }}
        direction="row"
        spacing={4}
      >
        <Button
          component={NavItem}
          to="/"
          endIcon={<HomeRoundedIcon />}
          sx={{ color: 'common.white' }}
        >
          Home
        </Button>
        <Button
          component={NavItem}
          to="/products"
          endIcon={<LocalPizzaRoundedIcon />}
          sx={{ color: 'common.white' }}
        >
          Products
        </Button>
        {isLoggedIn && (
          <Button
            component={NavItem}
            to="/cart"
            endIcon={
              <Badge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartRoundedIcon />
              </Badge>
            }
            sx={{ color: 'common.white' }}
          >
            Cart
          </Button>
        )}
      </Stack>
    </>
  );
}
