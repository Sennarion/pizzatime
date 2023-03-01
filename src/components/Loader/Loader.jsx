import { Backdrop, CircularProgress } from '@mui/material';

export default function Loader({ isOpen }) {
  return (
    <Backdrop open={isOpen}>
      <CircularProgress />
    </Backdrop>
  );
}
