import { Container, Box, Typography, Stack } from '@mui/material';
import { Logo } from 'components';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box as="footer" paddingY={2} boxShadow={10}>
      <Container>
        <Stack alignItems="center" spacing={2}>
          <Logo />
          <Typography>{year} © All right reserved</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
