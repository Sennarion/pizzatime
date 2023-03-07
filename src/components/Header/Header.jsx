import { Container, AppBar, Toolbar, Stack } from '@mui/material';
import { Navbar, Userbar } from 'components';

export default function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <Navbar />
            <Userbar />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
