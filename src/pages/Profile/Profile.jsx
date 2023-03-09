import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from 'firebase-config/config';
import { removeUser } from 'redux/auth/slice';
import { cleanCart } from 'redux/cart/slice';
import { selectEmail, selectAvatar } from 'redux/auth/selectors';
import { setIsLoading, setErrorStatus } from 'redux/global/slice';
import { Container, Stack, Avatar, Typography, Button } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export default function Profile() {
  const dispatch = useDispatch();

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
    <Container>
      <Stack spacing={4} alignItems="center">
        <Avatar
          alt="User avatar"
          src={avatar}
          sx={{ width: 150, height: 150 }}
        ></Avatar>
        <Typography variant="h6">{email}</Typography>
        <Button
          startIcon={<LogoutRoundedIcon />}
          variant="contained"
          onClick={singout}
        >
          Sign out
        </Button>
      </Stack>
    </Container>
  );
}
