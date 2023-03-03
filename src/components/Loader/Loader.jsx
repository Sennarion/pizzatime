import { Portal, Backdrop, CircularProgress } from '@mui/material';

export default function Loader({ isOpen }) {
  return (
    <Portal>
      <Backdrop open={isOpen}>
        <CircularProgress />
      </Backdrop>
    </Portal>
  );
}
