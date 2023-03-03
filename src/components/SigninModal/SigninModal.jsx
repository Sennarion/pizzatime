import { Link } from 'react-router-dom';
import { Dialog, Stack, Button, Typography } from '@mui/material';

export default function SigninModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Stack
        p={4}
        borderRadius={2}
        spacing={2}
        boxShadow={{ sm: 2 }}
        width={{ xs: 340, sm: 400 }}
        bgcolor="common.white"
      >
        <Typography>To add items to your cart, you need to sign in</Typography>
        <Button
          component={Link}
          to="/signin"
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Cancel
        </Button>
      </Stack>
    </Dialog>
  );
}
