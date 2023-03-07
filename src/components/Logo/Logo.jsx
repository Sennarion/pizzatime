import { Link } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import logo from 'assets/pizza-logo.svg';

export default function Logo({ primary = true }) {
  return (
    <Box>
      <Link to="/">
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={logo} width="40" alt="pizza-logo" />
          <Typography
            variant="h5"
            fontFamily="secondaryFontFamily"
            color={primary ? 'primary' : 'common.white'}
            display={{ xs: 'none', sm: 'block' }}
          >
            PizzaTime
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
}
