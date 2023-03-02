import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Box minWidth="160px">
      <Link to="/">
        <img src={logo} width="160px" alt="pizza-logo" />
      </Link>
    </Box>
  );
}
