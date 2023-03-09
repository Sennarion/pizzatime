import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

export default function SharedLayout() {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" paddingY={{ xs: 2, md: 4 }} flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
}
