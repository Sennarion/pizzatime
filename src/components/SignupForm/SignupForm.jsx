import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Stack } from '@mui/material';
import { setUser } from 'redux/auth/slice';
import { auth } from 'firebase-config/config.js';

export default function SignupForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
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
          Sign up
        </Button>
      </Stack>
    </form>
  );
}
