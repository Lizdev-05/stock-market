import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import Stock from '../components/stock/Stock';
import Footer from '../components/footer/Footer';

const Home = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <Container>
        <Stock />
      </Container>
    </main>
    <Footer />
  </>
);

export default Home;
