import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import { Button, TextField, Stack, Snackbar, Alert } from '@mui/material';
import { setUser } from 'redux/auth/slice';
import { auth } from 'firebase-config/config.js';
import { signupSchema } from 'utils/validationSchema';
import { Loader } from 'components';

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: ({ email, password }, { resetForm }) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
            })
          );
        })
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false));

      resetForm();
    },
    validationSchema: signupSchema,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            type="email"
            name="email"
            label="Email Address"
            variant="outlined"
            size="small"
            fullWidth
            value={values.email}
            onChange={handleChange}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            required
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            size="small"
            fullWidth
            value={values.password}
            onChange={handleChange}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            required
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            size="small"
            fullWidth
            value={values.confirmPassword}
            onChange={handleChange}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </Stack>
      </form>
      <Loader isOpen={isLoading} />
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={() => setError('')}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="error" onClose={() => setError('')}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
}
