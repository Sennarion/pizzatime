import { useFormik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Dialog, Stack, TextField, Button, Typography } from '@mui/material';
import { orderSchema } from 'utils/validationSchema';

export default function OrderModal({ isOpen, onClose, onOrder }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formik = useFormik({
    initialValues: {
      name: '',
      tel: '',
    },
    onSubmit: (_, { resetForm }) => {
      onOrder();
      onClose();

      resetForm();
    },
    validationSchema: orderSchema,
  });

  const { handleSubmit, handleChange, values, touched, errors } = formik;

  return (
    <Dialog open={isOpen} onClose={onClose} fullScreen={isMobile}>
      <Stack
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          p={4}
          borderRadius={2}
          spacing={2}
          width={{ xs: 340, sm: 400 }}
          bgcolor="common.white"
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Typography variant="h5" textAlign="center">
                Create order
              </Typography>
              <TextField
                type="text"
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                value={values.name}
                onChange={handleChange}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
                required
              />
              <TextField
                type="tel"
                name="tel"
                label="Phone Number"
                placeholder="0997777777"
                variant="outlined"
                size="small"
                fullWidth
                value={values.tel}
                onChange={handleChange}
                error={Boolean(touched.tel && errors.tel)}
                helperText={touched.tel && errors.tel}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Order
              </Button>
              <Button variant="outlined" fullWidth onClick={onClose}>
                Cancel
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Dialog>
  );
}
