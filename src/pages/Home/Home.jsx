import { Container } from '@mui/material';
import { Hero, Features, Images } from 'components';

export default function Home() {
  return (
    <Container>
      <Hero />
      <Features />
      <Images />
    </Container>
  );
}
