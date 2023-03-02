import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Button, TextField, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { setUser } from 'redux/auth/slice';
import { auth, provider } from 'firebase-config/config.js';

export default function SigninForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
      })
      .catch(err => alert(err));
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
      })
      .catch(err => alert(err));
  };

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <Stack spacing={2}>
        <TextField
          type="email"
          name="email"
          label="Email Address"
          variant="outlined"
          size="small"
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign in
        </Button>
        <Button
          startIcon={<GoogleIcon />}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={signInWithGoogle}
        >
          Sign in with google
        </Button>
      </Stack>
    </form>
  );
}
