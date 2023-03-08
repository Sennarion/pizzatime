import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Dialog, Stack, Button, Typography } from '@mui/material';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

export default function SigninModal({ isOpen, onClose }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          boxShadow={{ sm: 2 }}
          width={{ xs: 340, sm: 400 }}
          bgcolor="common.white"
          alignItems="center"
        >
          <ErrorRoundedIcon sx={{ fontSize: 70 }} color="primary" />
          <Typography textAlign="center" variant="h6">
            To add items to your cart, you need to Sign in
          </Typography>
          <Button
            component={Link}
            to="/signin"
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign in
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={onClose}
            fullWidth
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}
