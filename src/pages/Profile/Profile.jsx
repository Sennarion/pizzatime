import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container } from '@mui/material';

export default function Profile() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <Container>Profile</Container>;
}
