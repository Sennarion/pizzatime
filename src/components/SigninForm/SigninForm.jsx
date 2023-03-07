import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useFormik } from 'formik';
import { Button, TextField, Stack } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, provider } from 'firebase-config/config.js';
import { signinSchema } from 'utils/validationSchema';
import { setErrorStatus, setIsLoading } from 'redux/global/slice';
import { setUser } from 'redux/auth/slice';

export default function SigninForm() {
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(setIsLoading(true));
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            avatar: user.photoURL,
          })
        );
      })
      .catch(err => dispatch(setErrorStatus(err.message)))
      .finally(() => dispatch(setIsLoading(false)));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: ({ email, password }, { resetForm }) => {
      dispatch(setIsLoading(true));
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              avatar: null,
            })
          );
        })
        .catch(err => dispatch(setErrorStatus(err.message)))
        .finally(() => dispatch(setIsLoading(false)));

      resetForm();
    },
    validationSchema: signinSchema,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
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
