import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Stack, Box } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { SigninForm } from 'components';

export default function Signin() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        p={4}
        borderRadius={2}
        spacing={2}
        boxShadow={{ sm: 2 }}
        width={{ xs: 340, sm: 400 }}
        bgcolor="#fff"
      >
        <Stack spacing={2} alignItems="center">
          <PersonRoundedIcon color="primary" sx={{ fontSize: 80 }} />
          <Typography component="h2" variant="h5">
            Sign In
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <SigninForm />
          <Typography align="center">
            <Typography component="span" mr={1}>
              Don't have an account?
            </Typography>
            <Link component={RouterLink} to="/signup">
              Sign Up
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
