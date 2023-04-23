import type { NextPage } from 'next'
import { Container } from '@nextui-org/react';
import Navbar from '@/components/Navbar';
import Jumbotron from '@/components/Jumbotron';
import ProductGrid from '@/components/ProductGrid';
import { cardText } from '@/utils/data/cardText';

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <Jumbotron />
      <ProductGrid cardText={cardText} />
    </Container>
  );
}

export default Home
