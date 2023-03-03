import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography, Stack } from '@mui/material';
import { SignupForm, Logo, Background } from 'components';

export default function Signup() {
  return (
    <Background>
      <Stack
        p={4}
        borderRadius={2}
        spacing={2}
        boxShadow={{ sm: 2 }}
        width={{ xs: 340, sm: 400 }}
        bgcolor="common.white"
      >
        <Stack spacing={6} alignItems="center">
          <Logo />
          <Typography component="h2" variant="h5">
            Sign Up
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <SignupForm />
          <Typography align="center">
            <Typography component="span" mr={1}>
              Already have an account?
            </Typography>
            <Link component={RouterLink} to="/signin">
              Sign In
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Background>
  );
}
