import { Link } from 'react-router-dom';
import { Box, Typography, Stack } from '@mui/material';
import logo from 'assets/pizza-logo.svg';

export default function Logo() {
  return (
    <Box minWidth="160px">
      <Link to="/">
        <Stack direction="row" spacing={2} alignItems="center">
          <img src={logo} width="50px" alt="pizza-logo" />
          <Typography
            variant="h4"
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
