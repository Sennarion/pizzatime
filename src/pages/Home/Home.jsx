import { Container } from '@mui/material';
import { Hero, Features, Gallery } from 'components';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <Gallery />
    </Container>
  );
}
