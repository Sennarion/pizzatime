import { Container, Box, Typography, Stack } from '@mui/material';
import { Logo } from 'components';

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box as="footer" paddingY={2} boxShadow={10} bgcolor="primary.main">
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Logo primary={false} />
          <Typography color="common.white">
            {year} © All right reserved
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
