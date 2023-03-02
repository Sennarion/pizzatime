import { Link } from 'react-router-dom';
import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { Background } from './Home.styled';
import { Features } from 'components';

export default function Home() {
  return (
    <Container>
      <Box
        component={Background}
        paddingY={20}
        borderRadius={6}
        overflow="hidden"
        p={10}
        mb={10}
      >
        <Stack spacing={3} maxWidth="35%">
          <Typography variant="h4" component="h1" color="primary">
            Taste perfection in every slice!
          </Typography>
          <Typography color="common.white">
            Welcome to our pizza shop, where we make the most delicious pizzas
            you'll ever taste! Our pizza dough is made fresh daily, and we only
            use the freshest and highest quality ingredients to make our pizzas.
          </Typography>
          <Button component={Link} to="/products" variant="contained">
            Choose my pizza
          </Button>
        </Stack>
      </Box>
      <Features />
    </Container>
  );
}
