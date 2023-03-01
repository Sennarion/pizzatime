import { Stack, Container, Box } from '@mui/material';
import { Logo, Navbar } from 'components';

export default function Header() {
  return (
    <Box as="header" pt={2} pb={2}>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <Logo />
          <Navbar />
        </Stack>
      </Container>
    </Box>
  );
}
