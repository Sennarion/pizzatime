import { Link } from 'react-router-dom';
import { Container, Box, Typography, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Logo } from 'components';

export default function Footer() {
  return (
    <Box as="footer" paddingY={2} boxShadow={10} bgcolor="primary.main">
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Logo primary={false} />
          <Typography color="common.white">
            2023 © Developed by Serhii Reznichenko
          </Typography>
          <Stack direction="row">
            <IconButton
              component={Link}
              aria-label="Github link"
              to="https://github.com/Sennarion/pizzatime"
              size="large"
              sx={{ color: 'common.white' }}
            >
              <GitHubIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              component={Link}
              aria-label="LinkedIn link"
              to="https://www.linkedin.com/in/serhii-reznichenko/"
              size="large"
              sx={{ color: 'common.white' }}
            >
              <LinkedInIcon sx={{ fontSize: 34 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
