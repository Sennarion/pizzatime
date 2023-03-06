import { Link } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import logo from 'assets/pizza-logo.svg';

export default function Logo() {
  return (
    <Box>
      <Link to="/">
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={logo} width="50" alt="pizza-logo" />
          <Typography
            variant="h5"
            fontFamily="secondaryFontFamily"
            color="primary"
          >
            PizzaTime
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
}
