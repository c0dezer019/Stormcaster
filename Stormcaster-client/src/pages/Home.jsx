import React from 'react';
import { Container } from '@material-ui/core';

import CurrentForecast from '../components/weather/CurrentForecast';


const Home = () => {
  return (
    <Container maxWidth="xl">
      <CurrentForecast />
    </Container>
  );
}

export default Home;
