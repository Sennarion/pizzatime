import { Link } from 'react-router-dom';
import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { Background } from './Home.styled';
import { Features } from 'components';

export default function Home() {
  return (
    <Container>
      <Box
        component={Background}
        borderRadius={6}
        overflow="hidden"
        paddingX={{ sm: 8 }}
        paddingY={{ xs: 8, sm: 20 }}
        mb={{ sm: 8 }}
      >
        <Stack spacing={3} maxWidth={{ xs: '100%', sm: 350 }}>
          <Typography
            variant="h3"
            component="h1"
            color="primary"
            fontFamily="secondaryFontFamily"
          >
            Taste perfection in every slice!
          </Typography>
          <Typography>
            Welcome to our pizza shop, where we make the most delicious pizzas
            you'll ever taste! Our pizza dough is made fresh daily, and we only
            use the freshest and highest quality ingredients to make our pizzas.
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="primary"
          >
            Choose my pizza
          </Button>
        </Stack>
      </Box>
      <Features />
    </Container>
  );
}
